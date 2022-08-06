import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import NavigationBar from './components/Navbar';
import About from './pages/About';
import Hiking from './pages/Hiking';
import Others from './pages/Others';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';
// TESTING
import Blog from './pages/Testing/Pages/Blog';

// styles
import 'aos/dist/aos.css';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';
// import './assets/media.css';

// Light & Dark Mode (need to optmize)
import { createContext } from 'react';
import ModeSwitch from './components/ModeSwitch';
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
        <Router>
          <Suspense fallback={<Spinner />}>
            <NavigationBar />
            <ModeSwitch 
              className="theme-switch"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <Routes>
              <Route path="/" element={<About />} />
              {/* TESTING */}
              <Route path="blog" element={<Blog />} />
              {/* <Route path="blog/:id" element={<Blog />} /> */}
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