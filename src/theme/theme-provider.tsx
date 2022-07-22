import {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from 'react';

import { darkTheme, lightTheme } from './config';
import { themeGlobals } from './globals';

const getOppositeName = (theme: Theme.Name): Theme.Name =>
  theme === 'dark' ? 'light' : 'dark';

const getThemeValue = (theme: Theme.Name): Theme.Value =>
  theme === 'dark' ? darkTheme : lightTheme;

const ThemeContext = createContext({} as Theme.Context);

export const ThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  themeGlobals();
  const [selectedTheme, setSelectedTheme] = useState<Theme.Name>('dark');

  const value = useMemo(
    () => ({
      theme: selectedTheme,
      value: getThemeValue(selectedTheme),
      toggleTheme: (): void => setSelectedTheme(getOppositeName(selectedTheme)),
    }),
    [selectedTheme]
  );

  useEffect(() => {
    document.body.classList.remove(getOppositeName(selectedTheme));
    document.body.classList.add(selectedTheme);
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={value.value}>{children}</div>
    </ThemeContext.Provider>
  );
};
ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = (): Theme.Context => useContext(ThemeContext);

export namespace Theme {
  export type Name = 'dark' | 'light';

  export type Value = typeof darkTheme | typeof lightTheme;

  export type Toggle = () => void;

  export type Context = {
    theme: Name;
    value: Value;
    toggleTheme: Toggle;
  };
}
