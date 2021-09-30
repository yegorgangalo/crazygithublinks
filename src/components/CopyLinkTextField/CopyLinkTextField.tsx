import { FC, useCallback, KeyboardEvent } from 'react'
import { useSnackbar } from 'notistack'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FileCopy from '@material-ui/icons/FileCopy';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AiOutlineSend } from 'react-icons/ai'
import clsx from 'clsx';

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
  withButton: {
    '& .MuiInputBase-root': {
        paddingRight: 40,
    },
  },
  mb: {
      marginBottom: theme.spacing(1),
  },
  followButton: {
      borderRadius: '0 4px 4px 0',
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 8,
  },
}));

interface CopyLinkTextFieldProps {
    link: string;
    size?: 'medium' | 'small';
    label?: string;
    title?: string;
    onClickButton?(): void;
}

const CopyLinkTextField: FC<CopyLinkTextFieldProps> = ({ link, size, label, title, onClickButton }) => {
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
        <Box position="relative">
          <TextField
            value={link}
            onClick={handleCopyInputTextToClipboard}
            onKeyDown={handlePressKeyToCopyInputTextToClipboard}
            fullWidth
            size={size}
            label={label}
            title={title}
            variant="outlined"
            className={clsx(classes.copyInput, onClickButton && classes.withButton)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FileCopy />
                </InputAdornment>
              ),
            }}
          />
          {onClickButton && <IconButton className={classes.followButton} onClick={onClickButton}>
              <AiOutlineSend />
          </IconButton>}
        </Box>
    )
}

export default CopyLinkTextField