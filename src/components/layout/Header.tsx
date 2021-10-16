import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { THEMES } from 'constants/index';

export default function Header({ className }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={clsx(classes.root, className)}>
        <Toolbar>
          <Typography color="textPrimary">Codebook</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    ...(theme.name === THEMES.LIGHT
      ? {
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.main,
        }
      : {}),
    ...(theme.name === THEMES.ONE_DARK
      ? {
          backgroundColor: theme.palette.background.default,
        }
      : {}),
  },
}));
