import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// local files
import bgImg from '../../assets/img/LogIn/pat-sin-leng-01.jpeg'
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
      <img src={bgImg} alt="Pat Sin Leng" />
      <div className="login-content">
        <h2>Login</h2>
        <form>
          <p>Email</p>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            required 
          />
          <p>Password</p>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
            required 
          />
          <input 
            type="submit" 
            name="sign-in" 
            value="Sign In" 
          />
          <a href="#">Forget Password</a>
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