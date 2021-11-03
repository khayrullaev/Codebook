import { makeStyles } from '@mui/styles';
import Page from 'components/Page';
import { Typography } from '@mui/material';

export default function HomePage() {
  const classes = useStyles();

  return (
    <Page title="HomePage" className={classes.root}>
      <Typography color="textPrimary">Home Page</Typography>
    </Page>
  );
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.light,
  },
}));
