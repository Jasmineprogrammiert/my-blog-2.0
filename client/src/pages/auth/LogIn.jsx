import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// local files
import bgImg from '../../assets/img/LogIn/forbidden-city-02.png';
import { Context } from '../../context/Context';

const LogIn = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } 
    catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background Image" />
      <div className="login-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Login</h2>
        <form>
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
            value="Sign In" 
          />
          <br />
          <Link className="pwd-recovery" to="/pwdrecovery">
            <p>Forget Password</p>
          </Link>
          <Link className="sign-up" to="/signup">
            <p>Sign Up</p>
          </Link>
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
    </>
  )
}

export default LogIn;