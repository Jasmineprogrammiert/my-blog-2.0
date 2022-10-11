import { createContext } from 'react';
import useModeSwitch from '../hooks/useModeSwitch';

export const ModeContext = createContext(null);

export const ModeContextProvider = ({ children }) => {
  const { theme, setTheme, toggleTheme } = useModeSwitch();

  return (
    <ModeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div id={theme}>
        {children}
      </div>
    </ModeContext.Provider>
  )
}