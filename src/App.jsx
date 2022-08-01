import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import NavigationBar from './components/Navbar';
import About from './pages/About';
import Hiking from './pages/Hiking';
import Others from './pages/Others';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
// styles
import 'aos/dist/aos.css';
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
          <Route path="/" element={<About />} />
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