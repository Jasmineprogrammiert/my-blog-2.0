import { createContext, Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
// components - universal
import NavigationBar from './components/universal/Navbar';
import ModeSwitch from './components/universal/ModeSwitch';
import BackToTopp from './components/universal/BackToTop';
import Footer from './components/universal/Footer';
// components - pages
import About from './pages/About';
import BlogHome from './pages/Blog/BlogHome';
import Blog from './pages/Blog/Blog';
import SignUp from './pages/auth/SignUp';
import LogIn from './pages/auth/LogIn';
import Settings from './components/_testing_/Settings';
import More from './pages/More';
// hooks
import useModeSwitch from './hooks/useModeSwitch';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/style/global.css';
import './assets/style/mode.css';
import './assets/style/media.css';
// testing
import { Context } from './context/Context';

export const ThemeContext = createContext(null);

const App = () => {
  const { theme, setTheme, toggleTheme } = useModeSwitch();
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
            {/* <Route path="signup" element={user ? <BlogHome /> : <SignUp />}/> */}
            {/* <Route path="login" element={user ? <BlogHome /> : <LogIn />}/> */}
            {/* <Route path="settings" element={user ? <Settings /> : <LogIn />}/> */}
            {/* <Route path="more" element={<More />} /> */}
            <Route path="*" element={<Blog />} />
          </Routes>
          <Footer />
          <BackToTopp />
        </Suspense>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;