import { useRef, FC, ReactNode, memo } from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme } from '@material-ui/core/styles';

interface CardIconProps {
    children: ReactNode;
    onClick: (iconName: string) => void;
    iconName: string;
    selectedIcon: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(1),
    height: 60,
    width: 60,
    '&:hover': {
        background: '#B6F3ED',
    }
    },
    margin: {
    margin: theme.spacing(1),
  },
  selectedIcon: {
    background: '#B6F3ED',
  }
}));

const CardIcon: FC<CardIconProps> = ({ children, onClick, iconName, selectedIcon }) => {
    const classes = useStyles();
    const handleOnClick = useRef(() => onClick(iconName))

    return (
        <Grid item className={classes.margin}>
            <Card
                className={`${classes.card} ${selectedIcon && classes.selectedIcon}`}
                onClick={handleOnClick.current}
            >
                <Grid container justifyContent="center">
                    {children}
                </Grid>
            </Card>
        </Grid>
    )
}

export default memo(CardIcon)