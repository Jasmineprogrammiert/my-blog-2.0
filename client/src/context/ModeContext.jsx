import { createContext } from 'react';
import useModeSwitch from '../hooks/useModeSwitch';

const { theme, setTheme, toggleTheme } = useModeSwitch();

export const ThemeContext = createContext(null);

export const ModeContext = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
};

// export default ModeContext