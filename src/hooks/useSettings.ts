/* eslint-disable import/no-anonymous-default-export */
import { useContext } from 'react';
import SettingsContext from 'context/SettingsContext';

export default () => {
  const context = useContext(SettingsContext);

  return context;
};
