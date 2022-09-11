import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// styles
import bgImg from '../../assets/img/LogIn/floral-01.jpg';
import useVisibility from '../../hooks/useVisibility';
import VisibilitySwitch from '../../components/universal/VisibilitySwitch';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // const res = await axios.post('/api/auth/signup', {
      const res = await axios.post('/auth/signup', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } 
    catch (err) {
      return err;
    }
  };

  const { visibility, handleVisibility } = useVisibility();

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background Image" />
      <div className="login-content signup-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="username" 
            name="username"
            placeholder="Username"
            pattern="[A-Za-z0-9-_.]{4,25}"
            title="The usernaem must be 4-25 long, with letters, numbers, hyphens, underscores or periods only. No punctuation or special characters are allowed."
            required
            onChange={e => setUsername(e.target.value)}
          />
           <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type={visibility === 'visible' ? 'text' : 'password'} 
            name="password"
            placeholder="Password" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
            required
            onChange={e => setPassword(e.target.value)}
          />
          <span id="visibility-switch">
            <VisibilitySwitch
              visibility={visibility} 
              handleVisibility={handleVisibility} 
          />
          </span>
          <button>
            <Link className="submit-btn-link" to="/login">
              Register
            </Link>
          </button>
        </form>
      </div>
    </div>    
    </>
  )
}

export default SignUp;