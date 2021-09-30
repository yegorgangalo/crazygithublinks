import { ChangeEvent, FC } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AiOutlineSend } from 'react-icons/ai'

const useStyles = makeStyles((theme: Theme) => ({
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
}));

interface TextFieldWithButtonProps {
    value: string;
    label?: string;
    onChange?(e: ChangeEvent<HTMLInputElement>): void;
    onClickButton(): void;
}

const TextFieldWithButton: FC<TextFieldWithButtonProps> = ({ value, label, onChange, onClickButton }) => {
    const classes = useStyles()

    return (
        <Box position="relative">
            <TextField
                value={value}
                onChange={onChange}
                variant="outlined"
                label={label}
                fullWidth
                className={classes.modalInput}
            />
            <IconButton className={classes.modalButton} onClick={onClickButton}>
                <AiOutlineSend />
            </IconButton>
        </Box>
    )
}

export default TextFieldWithButton