import { ChangeEvent, FC, useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useDebounce } from 'use-debounce';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardList from '../../components/IconList'
import ColorPicker from '../../components/ColorPicker'
import ModalContent from '../../components/ModalContent'
import CopyLinkTextField from '../../components/CopyLinkTextField'
import { getOwner, getOwnerRepo, getShortURL } from '../../API'
import { IPickerColor, reactIcon } from '../../interfaces'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
        width: 400,
        background: '#F3F3F3',
    },
    prevLinkBlock: {
        width: 400,
    },
    marginBottom: {
      marginBottom: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
      },
    createLinkButton: {
      height: 50,
    },
    textField: {
        background: 'white',
        '& .MuiInputBase-input.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
        }
    }
}));

const CreateLinkPage: FC = () => {
    const classes = useStyles();
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar();

    // =========Owner============
    const [owner, setOwner] = useState<string>('')
    const [isOwnerExists, setIsOwnerExists] = useState<boolean>(false)
    const handleOwnerChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setOwner(e.target.value), [])

    const [debouncedOwner] = useDebounce(owner, 500);

    const checkIfOwnerExists = useCallback(async (debouncedOwner: string) => {
        try {
            const { data } = await getOwner(debouncedOwner)
            if (data.login !== debouncedOwner) {
                throw Error(`Author ${debouncedOwner} does not exists on GitHub`)
            }
            setIsOwnerExists(true)
        } catch (e) {
            setIsOwnerExists(false)
            enqueueSnackbar(`Author ${debouncedOwner} does not exists on GitHub`, { variant: "warning"})
        }
    }, [enqueueSnackbar])

    useEffect(() => {
        if (debouncedOwner) {
            checkIfOwnerExists(debouncedOwner)
        }
    }, [debouncedOwner, checkIfOwnerExists])
    // ====================================

    // =========Repository============
    const [repo, setRepo] = useState<string>('')
    const [isRepoExists, setIsRepoExists] = useState(false)
    const handleRepoChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setRepo(e.target.value), [])

    const [debouncedRepo] = useDebounce(repo, 500);

    const checkIfRepoExists = useCallback(async (debouncedOwner: string, debouncedRepo: string) => {
        try {
            const { data } = await getOwnerRepo(debouncedOwner, debouncedRepo)
            if (data.name !== debouncedRepo) {
                throw Error(`Repository ${debouncedRepo} does not exists`)
            }
            setIsRepoExists(true)
        } catch (e) {
            setIsRepoExists(false)
            enqueueSnackbar(`Repository ${debouncedRepo} does not exists`, { variant: "warning"})
        }
    }, [enqueueSnackbar])

    useEffect(() => {
        if (debouncedOwner && debouncedRepo) {
            checkIfRepoExists(debouncedOwner, debouncedRepo)
        }
    }, [debouncedOwner, debouncedRepo, checkIfRepoExists])
    // ====================================

    // ==============ColorPicker======================
    const [color, setColor] = useState<string>('#fff')
    const handleChangeComplete = useCallback((color: IPickerColor) => setColor(color.hex), [])
    // ======================================

    // =================select icon=====================
    const [icon, setIcon] = useState<string>('')
    const handleOnClickIconCard = useCallback((iconName: reactIcon) => setIcon(iconName), [])
    // ======================================

    // ================Modal======================
    const [isOpenModal, setIsOpenModal] = useState(false)
    const toggleOpenModal = useCallback(() => setIsOpenModal(prev => !prev), [])
    // ======================================

    // ================create Link======================
    const [linkURL, setLinkURL] = useState<string>('')

    const handleCreateLink = useCallback(async () => {
        const baseURL = window.location.origin
        const queryParams = `?owner=${owner}&repo=${repo}&color=${color}&icon=${icon}`
        const encodedQueryParams = btoa(queryParams);
        const longPathname = `card/${encodedQueryParams}`
        const longLinkURL = `${baseURL}/${longPathname}`
        const { data: tinyURL } = await getShortURL(longLinkURL)
        const { pathname: tinyPathname } = new URL(tinyURL)
        const shortLinkURL = `${baseURL}${tinyPathname}`
        setLinkURL(shortLinkURL)
        localStorage.setItem('shortLinkURL', JSON.stringify({shortLinkURL, owner, repo, longPathname}))
        toggleOpenModal()
        },
        [color, owner, repo, icon, toggleOpenModal],
    )
    // ======================================

    // =================PrevLink=====================
    const [prevLink, setPrevLink] = useState<string>('')
    const [prevOwner, setPrevOwner] = useState<string>('')
    const [prevRepo, setPrevRepo] = useState<string>('')
    const [prevLongPathname, setPrevLongPathname] = useState<string>('')

    useEffect(() => {
        const lsLink = localStorage.getItem('shortLinkURL')
        if (lsLink) {
            const { shortLinkURL, owner, repo, longPathname } = JSON.parse(lsLink)
            setPrevLink(shortLinkURL)
            setPrevOwner(owner)
            setPrevRepo(repo)
            setPrevLongPathname(longPathname)
        }
    }, [linkURL])

    const handleFollowLink = useCallback(() => history.push(prevLongPathname), [history, prevLongPathname])
    // ======================================

    const isCreateLinkButtonDisabled = !isOwnerExists || !isRepoExists || !icon

    return (
        <Box p={4}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                spacing={6}
            >
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.root}
                >
                    <Grid item container justifyContent="center">
                        <Typography className={classes.marginBottom}>
                            Create link for github repository
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.marginBottom}>
                        <TextField
                            fullWidth
                            label="Author"
                            value={owner}
                            onChange={handleOwnerChange}
                            variant="outlined"
                            size="small"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.marginBottom}>
                        <TextField
                            fullWidth
                            label="Repository"
                            value={repo}
                            onChange={handleRepoChange}
                            variant="outlined"
                            size="small"
                            disabled={!isOwnerExists || !owner}
                            className={classes.textField}
                        />
                    </Grid>
                    <ColorPicker
                        color={color}
                        handleChangeComplete={handleChangeComplete}
                    />
                    <CardList
                        selectedIcon={icon}
                        handleOnClickIconCard={handleOnClickIconCard}
                    />
                    <Grid item className={classes.marginBottom}>
                        <Button
                            onClick={handleCreateLink}
                            variant="contained"
                            color="primary"
                            disabled={isCreateLinkButtonDisabled}
                            className={classes.createLinkButton}
                            fullWidth
                        >
                            Create Link
                        </Button>
                    </Grid>
                </Grid>
                {prevLink && <Grid item className={classes.prevLinkBlock} >
                    <CopyLinkTextField
                        link={prevLink}
                        size="small"
                        label="Your previous created link"
                        title={`Author: ${prevOwner}\n Repository: ${prevRepo}`}
                        onClickButton={handleFollowLink}
                    />
                </Grid>}
            </Grid>
            <Modal
                open={isOpenModal}
                onClose={toggleOpenModal}
            >
                <ModalContent
                    color={color}
                    owner={owner}
                    repo={repo}
                    icon={icon}
                    link={linkURL}
                />
            </Modal>
        </Box>
    )
}

export default CreateLinkPage;