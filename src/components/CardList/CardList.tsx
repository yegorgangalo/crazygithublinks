import { FC, useMemo, memo } from 'react'
import * as reactIcons from 'react-icons/ai'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardIcon from '../CardIcon'
import { reactIcon } from '../../interfaces'

interface CardListProps {
    selectedIcon: string;
    handleOnClickIconCard: (iconName: reactIcon) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
}));

const CardList: FC<CardListProps> = ({ selectedIcon, handleOnClickIconCard }) => {
    const classes = useStyles();

    const iconsNames = useMemo(() => {
        const iconsArray = Object.keys(reactIcons) as Array<reactIcon>
        return iconsArray.slice(0, 50)
    }, [])

    return (
        <>
            <Typography>Choose icon</Typography>
            <Paper className={classes.root}>
                <Grid container wrap="nowrap">
                    {iconsNames.map(iconName => {
                        const CurrentIcon = reactIcons[iconName]
                        return (
                            <CardIcon
                                key={iconName}
                                selectedIcon={selectedIcon === iconName}
                                iconName={iconName}
                                onClick={handleOnClickIconCard}>
                                    <CurrentIcon size="4em" />
                            </CardIcon>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}

export default memo(CardList)