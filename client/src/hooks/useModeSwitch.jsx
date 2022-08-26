import useLocalStorage from 'use-local-storage';

const useModeSwitch = () => {
  const defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultMode ? 'dark' : 'light');
  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };
  
  return { theme, setTheme, toggleTheme };
}

export default useModeSwitch;