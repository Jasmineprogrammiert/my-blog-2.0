import { createContext, useState } from 'react';
import { Switch } from '@mui/material';
export const ThemeContext = createContext(null);

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    {/* <label>
      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    </label> */}
     <Switch 
      className="nav-item"
      onChange={toggleTheme}
      checked={theme === 'dark'}
    />
    <div value={{ theme, setTheme }} style={{margin: "2rem"}} id={theme}>
      Function Theme
    </div>
    </>
  )
}

export default ThemeSwitch;