import { useCallback, FC, KeyboardEvent, ReactNode, memo } from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx'
import { reactIcon } from '../../interfaces'

interface IconItemProps {
    children: ReactNode;
    onClick: (iconName: reactIcon) => void;
    iconName: reactIcon;
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

const IconItem: FC<IconItemProps> = ({ children, onClick, iconName, selectedIcon }) => {
    const classes = useStyles();
    const handleOnClick = useCallback(() => onClick(iconName), [iconName, onClick])

    const handlePressKeyToSelectIcon = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  }, [handleOnClick]);

    return (
        <Grid item className={classes.margin}>
            <Card
                className={clsx(classes.card, selectedIcon && classes.selectedIcon)}
                onClick={handleOnClick}
                onKeyDown={handlePressKeyToSelectIcon}
                tabIndex={0}
            >
                <Grid container justifyContent="center">
                    {children}
                </Grid>
            </Card>
        </Grid>
    )
}

export default memo(IconItem)