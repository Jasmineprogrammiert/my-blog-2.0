import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import NavigationBar from './components/Navbar';
import About from './pages/About';
import Hiking from './pages/Hiking';
import Others from './pages/Others';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
// import ThemeSwitch from './components/Testing/ThemeSwitch';

// styles
import 'aos/dist/aos.css';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';
// import './assets/media.css';

// Light & Dark Mode (need to optmized)
import { createContext, useState } from 'react';
import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <NavigationBar />
            <LightModeIcon
              className="theme-switch"
              // onClick={() => setTheme('dark')}
              onClick={toggleTheme}
              // checked={theme === 'dark'}
            />
            <Switch 
              className="theme-switch"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            {/* <ThemeSwitch /> */}
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="hiking" element={<Hiking />} />
              <Route path="others" element={<Others />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;