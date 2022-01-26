import { createContext, useState, useEffect } from 'react';
import _ from 'lodash';
import { THEMES } from 'constants/index';
import { storeSettings } from 'utils/settings';

interface SettingsProps {
  direction: string;
  responsiveFontSizes: boolean;
  theme: string;
}

type SettingsContextInterface = {
  settings: SettingsProps;
  saveSettings: (props: SettingsProps) => void;
};

const defaultSettings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: THEMES.LIGHT,
};

const SettingsContext = createContext<SettingsContextInterface>(null);

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const handleSaveSettings = (updatedSettings = {}) => {
    const mergedSettings = _.merge({}, currentSettings, updatedSettings);
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, saveSettings: handleSaveSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
