import { Suspense, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import UpdateUsername from './components/Settings/UpdateUsername';
import UpdateEmail from './components/Settings/UpdateEmail';
import UpdatePwd from './components/Settings/UpdatePwd';
import More from './pages/More';
// hooks & contexts
import { ModeContext } from './context/ModeContext';
import { AuthContext } from './context/AuthContext';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/style/global.css';
import './assets/style/mode.css';
import './assets/style/media.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ModeContext);
  const { user } = useContext(AuthContext);

  return (
    <>
    <Suspense fallback={<Spinner />}>
      <NavigationBar />
      <ModeSwitch theme={theme} toggleTheme={toggleTheme}  />
      <Routes>
        <Route path="/" element={<About />} />
        {/* ---------- Blogs ----------  */}
        <Route path="blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* ---------- Authentication ----------  */}
        <Route path="signup" element={user ? <Navigate to="/blog" /> : <SignUp />}/>
        <Route path="login" element={user ? <Navigate to="/blog" /> : <LogIn />}/>
        {/* ---------- Settings ----------  */}
        <Route path="settings" element={user ? <Settings /> : <Navigate to="/login" />}/>
        <Route path="update-username" element={<UpdateUsername />} />
        <Route path="update-email" element={<UpdateEmail />} />
        <Route path="update-password" element={<UpdatePwd />} />
        {/* ---------- Others ----------  */}
        <Route path="more" element={<More />} />
        <Route path="*" element={<Blog />} />
      </Routes>
      <Footer />
      <BackToTopp />
    </Suspense>
    </>
  );
}

export default App;