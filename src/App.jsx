import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import NavigationBar from './components/Navbar';
import About from './pages/About';
import BlogHome from './pages/Blog/BlogHome';
import Blog from './pages/Blog/Blog';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';

// styles
import 'aos/dist/aos.css';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/mode.css';
import './assets/global.css';
// import './assets/media.css';

// mode (to be optimized with useRef Hook)
import { createContext } from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null);

function App() {
  const defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultMode ? 'dark' : 'light');
  const toggleTheme = () => {
    setTheme(cur => cur === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <Suspense fallback={<Spinner />}>
          <NavigationBar />
          <IconButton 
            id="theme-switch"
            sx={{ ml: 1 }} 
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;