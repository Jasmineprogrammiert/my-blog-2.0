import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// styles
import bgImg from '../../assets/img/LogIn/floral-01.jpg';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post('/auth/signup', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } 
    catch (err) {
      setError(true);
    }
  };

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background Image" />
      <div className="login-content signup-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Sign Up</h2>
        <form>
          <input 
            type="username" 
            name="username"
            placeholder="Username"
            pattern="[A-Za-z0-9-_.]{4,25}"
            title="The usernaem must be 4-25 long, with letters, numbers, hyphens, underscores or periods only. No punctuation or special characters are allowed."
            required 
          />
           <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
            required 
          />
          <input 
            type="submit" 
            name="sign-in" 
            value="Register" 
          />
          <br />
        </form>
        {/* <span className="loginTitle">Login</span>
        <form 
          className="loginForm" 
          onSubmit={handleSubmit}
        >
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username"
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password"
            ref={passwordRef}
          />
          <button
            type="submit" 
            className="loginButton" 
            disabled={isFetching}
          >
            Login
          </button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </button> */}
      </div>
    </div>    
    {/* <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={e => setPassword(e.target.value)}
        />
        <button className="registerButton" type="subnmit">Sign Up</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div> */}
    </>
  )
}

export default SignUp;