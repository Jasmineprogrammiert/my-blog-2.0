import { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// local files
import bgImg from '../../assets/img/LogIn/forbidden-city-02.png';
import { AuthContext } from '../../context/AuthContext';
// styles
import VisibilitySwitch from '../../components/universal/VisibilitySwitch';
import useVisibility from '../../hooks/useVisibility';

const LogIn = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);
  // const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    // setError(false);
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const { visibility, handleVisibility } = useVisibility();

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background Image" />
      <div className="login-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="username" 
            name="username" 
            placeholder="Username" 
            required
            ref={userRef}
          />
          <input 
            type={visibility === 'visible' ? 'text' : 'password'} 
            name="password"
            placeholder="Password" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
            required
            ref={passwordRef}
          />
          <span id="visibility-switch">
            <VisibilitySwitch
              visibility={visibility} 
              handleVisibility={handleVisibility} 
            />
          </span>
          {/* {error && <div className="signup-error">Username or email is incorrect. Please try again.</div>} */}
          {/* <button className="submit-btn" disabled={isFetching}>
            Sign In
          </button> */}
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
          <Link className="pwd-recovery" to="/pwdrecovery">
            <p>Forget Password</p>
          </Link>
          <Link className="sign-up" to="/signup">
            <p>Sign Up</p>
          </Link>
        </form>
      </div>
    </div>    
    </>
  )
}

export default LogIn;