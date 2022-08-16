import { createContext, Suspense, useContext } from 'react';
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
import BlogHomeTesting from './pages/Blog/testing/BlogHomeTesting';
import BlogTesting from './pages/Blog/testing/BlogTesting';
import Settings from './components/testing/Settings';
import { Context } from './context/Context';

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

  const { user } = useContext(Context);

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <Suspense fallback={<Spinner />}>
          <NavigationBar />
          <ModeSwitch theme={theme} toggleTheme={toggleTheme}  />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="signup" element={user ? <BlogHome /> : <SignUp />}/>
            <Route path="login" element={user ? <BlogHome /> : <LogIn />}/>
            <Route path="*" element={<About />} />
            {/* testing */}
            <Route path="imgslider" element={<ImgSlider />} />
            <Route path="settings" element={user ? <Settings /> : <LogIn />}/>
            <Route path="bloghometesting" element={<BlogHomeTesting />} />
            <Route path="/bloghometesting/:blogId" element={<BlogTesting />} />

          </Routes>
        </Suspense>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;