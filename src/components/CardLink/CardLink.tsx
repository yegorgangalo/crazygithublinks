import { FC, useState, useEffect, useCallback, useRef } from 'react'
import { useSnackbar } from 'notistack'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as icons from 'react-icons/ai'
import { getOwnerRepo, getContributors } from '../../API/api'
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
    const [starsAmount, setStarsAmount] = useState<number | null>(null)

    // ================getContributors====================
    const [contributors, setContributors] = useState<string[]>([])

    const getContributorList = useRef(async () => {
        try {
            const { data } = await getContributors(owner, repo)
            const contributors = (data as IContributor[]).map(({ login }) => login).slice(0, 10)
            setContributors(contributors)
        } catch (e) {
            enqueueSnackbar('Can\'t get contributors', { variant: "warning"})
        }
    })
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
        getContributorList.current()
    }, [fetchData])

    const SelectedIcon = icons[icon as keyof typeof icons]

    return (
        <Card className={classes.card} style={{background: color}}>
            <Grid container spacing={2}>
                <Grid item>
                    <SelectedIcon size="8em" />
                </Grid>
                <Grid item className={classes.desc}>
                    <Typography>Author: {repoAuthor}</Typography>
                    <Typography>Repository: {repoName}</Typography>
                    <Typography>Description: {repoDescription || 'no description'}</Typography>
                    <Typography>Stars: {starsAmount}</Typography>
                    <Contributors contributors={contributors} />
                </Grid>
            </Grid>
        </Card>
    )
}

export default CardLink