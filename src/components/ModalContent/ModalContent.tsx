import { FC, useCallback, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopy from '@material-ui/icons/FileCopy';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardLink from '../CardLink'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
  },
  copyInput: {
    '& input': {
      cursor: 'pointer',
      caretColor: 'transparent',
      textOverflow: 'ellipsis',
    },
    marginBottom: theme.spacing(4),
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
    const { enqueueSnackbar } = useSnackbar()

    // =====copy to clipboard handle & on press key Enter=====
    const handleCopyInputTextToClipboard = useCallback(() => {
      navigator.clipboard
        .writeText(link)
        .then(() => enqueueSnackbar('Link is copied to clipboard', { variant: "success" }))
        .catch(() => enqueueSnackbar('Link is not copied to clipboard. Try again, please.', { variant: "error" }))
    }, [enqueueSnackbar, link]);

  const handlePressKeyToCopyInputTextToClipboard = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCopyInputTextToClipboard();
    }
  }, [handleCopyInputTextToClipboard]);
  // =======================================================

    return (
        <Card className={classes.root}>
            <Grid container direction="column">
                <Typography variant="subtitle2" className={classes.mb}>Share this link in social networks</Typography>
                <TextField
                    value={link}
                    onClick={handleCopyInputTextToClipboard}
                    onKeyDown={handlePressKeyToCopyInputTextToClipboard}
                    fullWidth
                    variant="outlined"
                    className={classes.copyInput}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FileCopy />
                        </InputAdornment>
                      ),
                    }}
                />
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