import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { THEMES } from 'constants/index';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// hooks
import useSettings from 'hooks/useSettings';

export default function Header({ className, ...rest }) {
  const classes = useStyles();
  const { settings, saveSettings } = useSettings();

  const switchTheme = () => {
    saveSettings({
      direction: 'ltr',
      responsiveFontSizes: true,
      theme: settings.theme === 'LIGHT' ? 'ONE_DARK' : 'LIGHT',
    });
  };

  return (
    <div>
      <AppBar position="fixed" {...rest}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logo}>CodeBook</Typography>
          <div className={classes.buttonContainer}>
            <button className={classes.button} onClick={switchTheme}>
              {settings.theme === 'LIGHT' ? (
                <DarkModeIcon className={classes.icon} />
              ) : (
                <LightModeIcon />
              )}
            </button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:
      theme.name === THEMES.LIGHT
        ? theme.palette.primary.main
        : theme.palette.background.default,
  },

  buttonContainer: {
    width: 40,
    height: 40,
  },

  button: {
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    border: '1px solid white',
    backgroundColor:
      theme.name === THEMES.LIGHT
        ? theme.palette.primary.main
        : theme.palette.background.dark,
    color: 'white',
    cursor: 'pointer',
  },

  icon: {
    color: 'white',
  },

  logo: {
    textTransform: 'none',
    fontStyle: 'none',
  },
}));
