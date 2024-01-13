import { Suspense, useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import Settings from './pages/auth/Settings';
import UpdateUsername from './pages/auth/UpdateUsername';
import UpdateEmail from './pages/auth/UpdateEmail';
import UpdatePwd from './pages/auth/UpdatePwd';
// contexts
import { ModeContext } from './context/ModeContext';
import { AuthContext } from './context/AuthContext';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/style/global.css';
import './assets/style/mode.css';
import './assets/style/media.css';
import { AnimatePresence } from 'framer-motion';
// TESTING
import SettingsTesting from './components/_testing_/settings-testing';

const App = () => {
  const { theme, toggleTheme } = useContext(ModeContext);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
    <Suspense fallback={<Spinner />}>
      <NavigationBar />
      <ModeSwitch theme={theme} toggleTheme={toggleTheme}  />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<About />} />
            {/* ---------- Blogs ----------  */}
            <Route path="blog" element={<BlogHome />} />
            <Route path="/blog/:url_title" element={<Blog />} />
            {/* ---------- Authentication ----------  */}
            <Route path="signup" element={user ? <Navigate to="/blog" /> : <SignUp />}/>
            <Route path="login" element={user ? <Navigate to="/blog" /> : <LogIn />}/>
            {/* ---------- Settings ----------  */}
            <Route path="settings" element={user ? <Settings /> : <Navigate to="/login" />}/>
            <Route path="update-username" element={user ? <UpdateUsername /> : <Navigate to="/login" />} />
            <Route path="update-email" element={user ? <UpdateEmail /> : <Navigate to="/login" />} />
            <Route path="update-password" element={user ? <UpdatePwd /> : <Navigate to="/login" />} />
            {/* ---------- Others ----------  */}
            <Route path="*" element={<Blog />} />
            {/* ---------- TESTING ----------  */}
            <Route path="testing1" element={<SettingsTesting />}/>
          </Routes>
        </AnimatePresence>
      <Footer />
      <BackToTopp />
    </Suspense>
    </>
  );
}

export default App;