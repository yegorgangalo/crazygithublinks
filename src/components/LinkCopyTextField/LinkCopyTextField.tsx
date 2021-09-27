import { FC, useCallback, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopy from '@material-ui/icons/FileCopy';
import { makeStyles, Theme } from '@material-ui/core/styles';

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

interface LinkCopyTextFieldProps {
    link: string;
    size?: 'medium' | 'small';
    label?: string;
    title?: string;
}

const LinkCopyTextField: FC<LinkCopyTextFieldProps> = ({ link, size, label, title }) => {
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
        <TextField
            value={link}
            onClick={handleCopyInputTextToClipboard}
            onKeyDown={handlePressKeyToCopyInputTextToClipboard}
            fullWidth
            size={size}
            label={label}
            title={title}
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
    )
}

export default LinkCopyTextField