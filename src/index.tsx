import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// context
import { SettingsProvider } from 'context/SettingsContext';

// utils
import { restoreSettings } from 'utils/settings';

const settings = restoreSettings();

ReactDOM.render(
  <SettingsProvider settings={settings}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SettingsProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
