import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createStyles } from '@mui/styles';
import { jssPreset, StylesProvider, makeStyles } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import Layout from 'components/layout/index';

// assets
import { createTheme } from 'assets/theme';

// hooks
import useSettings from 'hooks/useSettings';

// Routes
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import HomePage from 'pages/HomePage';
import SavedSnippets from 'pages/SavedSnippets';
import NotFound from 'components/NotFound';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App: React.FC = () => {
  useStyles();
  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/saved" component={SavedSnippets} />
              <Route exact path="/404" component={NotFound} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  })
);

export default App;
