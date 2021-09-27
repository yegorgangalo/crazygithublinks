import { FC } from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardLink from '../CardLink'
import LinkCopyTextField from '../LinkCopyTextField'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
  },
  mb: {
      marginBottom: theme.spacing(1),
  },
}));

interface ModalContentProps {
    color: string;
    owner: string;
    repo: string;
    icon: string;
    link: string;
}

const ModalContent: FC<ModalContentProps> = ({ color, owner, repo, icon, link }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container direction="column">
                <Typography variant="subtitle2" className={classes.mb}>Share this link in social networks</Typography>
                <LinkCopyTextField link={link} />
                <Typography variant="subtitle2" className={classes.mb}>Card preview</Typography>
                <CardLink
                    color={color}
                    owner={owner}
                    repo={repo}
                    icon={icon}
                />
            </Grid>
        </Card>
    )
}

export default ModalContent