import { createContext, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
// components
import NavigationBar from './components/universal/Navbar';
import ModeSwitch from './components/universal/ModeSwitch';
import About from './pages/About';
import BlogHome from './pages/Blog/BlogHome';
import Blog from './pages/Blog/Blog';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';
// testing
import ImgSlider from './components/testing/ImgSlider';

// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/style/global.css';
import './assets/style/mode.css';
import './assets/style/media.css';

export const ThemeContext = createContext(null);

const App = () => {
  const defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultMode ? 'dark' : 'light');
  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <Suspense fallback={<Spinner />}>
          <NavigationBar />
          <ModeSwitch theme={theme} toggleTheme={toggleTheme}  />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="imgslider" element={<ImgSlider />} />
            <Route path="blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;