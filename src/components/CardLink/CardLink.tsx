import { FC, useState, useEffect, useCallback, ChangeEvent } from 'react'
import { useSnackbar } from 'notistack'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as reactIcons from 'react-icons/ai'
import { getOwnerRepo, getContributors, starRepo, checkIsStarredRepo } from '../../API'
import { IContributor } from '../../interfaces'
import Contributors from '../Contributors'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 400,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
  },
  desc: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    },
  starButton: {
    padding: 0,
    borderRadius: 0,
  },
  modalButton: {
      borderRadius: 4,
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 16,
  },
  modalInput: {
    '& .MuiInputBase-root': {
        paddingRight: 42,
    },
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    width: 400,
  },
}));

interface CardLinkProps {
    color: string;
    owner: string;
    repo: string;
    icon: string;
}

const CardLink: FC<CardLinkProps> = ({ color, owner, repo, icon }) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [repoAuthor, setRepoAuthor] = useState<string>('')
    const [repoName, setRepoName] = useState<string>('')
    const [repoDescription, setRepoDescription] = useState<string>('')
    const [starsAmount, setStarsAmount] = useState<number>(0)

    // ================getContributors====================
    const [contributors, setContributors] = useState<string[]>([])

    const getContributorList = useCallback(async () => {
        try {
            const { data } = await getContributors(owner, repo)
            const contributors = (data as IContributor[]).map(({ login }) => login).slice(0, 10)
            setContributors(contributors)
        } catch (e) {
            enqueueSnackbar("Can't get contributors", { variant: "warning"})
        }
    }, [owner, repo, enqueueSnackbar])
    // ====================================

    const fetchData = useCallback(
        async () => {
            try {
                const {data} = await getOwnerRepo(owner, repo)
                setRepoAuthor(data.owner.login)
                setRepoName(data.name)
                setRepoDescription(data.description)
                setStarsAmount(data.stargazers_count)
            } catch (e) {
                enqueueSnackbar(`Author or repository with these names does not exist. ${(e as Error).message}`, { variant: "error"})
            }
        },
        [owner, repo, enqueueSnackbar],
    )

    useEffect(() => {
        fetchData()
        getContributorList()
    }, [fetchData, getContributorList])

    const SelectedIcon = reactIcons[icon as keyof typeof reactIcons]
    const { AiFillStar, AiOutlineStar, AiOutlineSend } = reactIcons

    // ================Modal======================
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isStarredRepo, setIsStarredRepo] = useState(false)
    const toggleOpenModal = useCallback(() => setIsOpenModal(prev => !prev), [])

    const [tokenPAT, setTokenPAT] = useState<string>('')
    const handleTokenPATChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTokenPAT(e.target.value), [])

    const handleClickToStarRepo = useCallback(async () => {
        try {
            const { status } = await checkIsStarredRepo(owner, repo, tokenPAT)
            if (status === 204) {
                toggleOpenModal()
                setIsStarredRepo(true)
                enqueueSnackbar('Your are already starring this repository', { variant: "info"})
                return
            }
        } catch (error) {
            console.log((error as Error).message)
        }

        try {
            const { status } = await starRepo(owner, repo, tokenPAT)
            if (status !== 204) {
                throw Error('Try again')
            }
            toggleOpenModal()
            setStarsAmount(prev => prev + 1)
            setIsStarredRepo(true)
        } catch (error) {
            enqueueSnackbar((error as Error).message, { variant: "warning"})
        }
    }, [owner, repo, tokenPAT, enqueueSnackbar, toggleOpenModal]);
    // ======================================

    return (
        <>
        <Card className={classes.card} style={{background: color}}>
            <Grid container spacing={2}>
                <Grid item>
                    <SelectedIcon size="8em" />
                </Grid>
                <Grid item className={classes.desc}>
                    <Typography>Author: {repoAuthor}</Typography>
                    <Typography>Repository: {repoName}</Typography>
                    <Typography>Description: {repoDescription || 'no description'}</Typography>
                    <Typography>
                        Stars: {starsAmount}
                        <IconButton className={classes.starButton} onClick={toggleOpenModal}>
                            {isStarredRepo ? <AiFillStar /> : <AiOutlineStar />}
                        </IconButton>
                    </Typography>
                    <Contributors contributors={contributors} />
                </Grid>
            </Grid>
            </Card>
            <Modal
                open={isOpenModal}
                onClose={toggleOpenModal}
            >
                <Card className={classes.modalContent}>
                    <Box position="relative">
                        <TextField
                            value={tokenPAT}
                            onChange={handleTokenPATChange}
                            variant="outlined"
                            label="Fill your personal auth token"
                            fullWidth
                            className={classes.modalInput}
                        />
                        <IconButton className={classes.modalButton} onClick={handleClickToStarRepo}>
                            <AiOutlineSend />
                        </IconButton>
                    </Box>
                </Card>
            </Modal>
            </>
    )
}

export default CardLink