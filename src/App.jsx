import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import NavigationBar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Hiking from './components/pages/Hiking';
import Others from './components/pages/Others';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';
// import './assets/media.css';

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<Spinner />}>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hiking" element={<Hiking />} />
          <Route path="others" element={<Others />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;