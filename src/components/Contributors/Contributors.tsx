import { FC, memo } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    accordion: {
    background: 'inherit',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
        margin: 0,
      }
  },
  accordionSummary: {
      display: 'inline-flex',
      padding: 0,
      minHeight: 0,
      height: 20,
      '&.Mui-expanded': {
        minHeight: 0,
      },
      '& .MuiIconButton-root': {
        padding: 0,
      },
  }
}));

interface ContributorsProps {
    contributors: string[];
}

const Contributors: FC<ContributorsProps> = ({ contributors }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary className={classes.accordionSummary} expandIcon={<ExpandMoreIcon />}>
        <Typography>Contributors</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          {contributors.map((contributor, index) => (
            <Grid item key={contributor}>
              <Link
                href={`https://github.com/${contributor}`}
                underline="hover"
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                {`${index + 1} ${contributor}`}
              </Link>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default memo(Contributors);
