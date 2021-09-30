import { FC, useCallback } from 'react'
import { Redirect, useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardLink from '../../components/LinkCard'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
    },
    card: {
        marginBottom: theme.spacing(2),
    }
}));

interface Params {
    hash: string,
}

const CardLinkPage: FC = () => {
    const classes = useStyles()
    const history = useHistory()

    const handleCreateOwnCard = useCallback(() => history.push('/'), [history])

    const { hash } = useParams<Params>()

    let decodedQueryParams = ''
    try {
        decodedQueryParams = atob(hash);
    } catch (error) {
        console.log('error', error)
    }

    const queryParams = new URLSearchParams(decodedQueryParams);

    const color = queryParams.get('color') || ''
    const owner = queryParams.get('owner') || ''
    const repo = queryParams.get('repo') || ''
    const icon = queryParams.get('icon') || ''

    const shouldRedirect = !color || !owner || !repo || !icon

    return (
        <>
            {shouldRedirect && <Redirect to="/" />}
            {!shouldRedirect && <Grid container justifyContent="center" className={classes.root}>
                <Grid item className={classes.card}>
                    <CardLink
                    color={color}
                    owner={owner}
                    repo={repo}
                    icon={icon}
                />
                </Grid>
                <Grid item>
                    <Button onClick={handleCreateOwnCard}>Create own card</Button>
                </Grid>
            </Grid>}
        </>
    )
}

export default CardLinkPage;