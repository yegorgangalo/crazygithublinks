import { FC, useRef, useState, useCallback, MouseEvent } from 'react'
import { ChromePicker } from 'react-color'
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => ({
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  colorButton: {
    height: 50,
  },
  backdrop: {
    zIndex: 2,
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

interface ColorPickerProps {
    color: string,
    handleChangeComplete: (color: any) => void,
}

const ColorPicker: FC<ColorPickerProps> = ({ color, handleChangeComplete}) => {
    const classes = useStyles();

    const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
    const colorButtonRef = useRef<HTMLButtonElement>(null)
    const [left, setLeft] = useState<number>(0)
    const [top, setTop] = useState<number>(0)

    const toggleShowColorPicker = useCallback(() => {
        if (colorButtonRef?.current) {
            const { left, top } = colorButtonRef.current.getBoundingClientRect();
            setTop(top + colorButtonRef.current.clientHeight)
            setLeft(left)
        }
        setShowColorPicker((prev) => !prev)
    }, [colorButtonRef])

    const hideColorPicker = useCallback((e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            setShowColorPicker((prev) => !prev)
        }
    }, [])

    return (
        <Grid item className={classes.marginBottom}>
            <Button
                ref={colorButtonRef}
                onClick={toggleShowColorPicker}
                variant="contained"
                style={{ background: color }}
                className={classes.colorButton}
                fullWidth
            >
                Pick Color
            </Button>
            {showColorPicker && (
                <Box className={classes.backdrop} onClick={hideColorPicker}>
                    <Box style={{left, top, position: "absolute"}}>
                        <ChromePicker
                            disableAlpha
                            color={color}
                            onChangeComplete={handleChangeComplete}
                        />
                    </Box>
                </Box>
            )}
        </Grid>
    )
}

export default ColorPicker