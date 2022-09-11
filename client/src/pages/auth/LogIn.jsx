import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// local files
import bgImg from '../../assets/img/LogIn/forbidden-city-02.png';
import { Context } from '../../context/Context';
// styles
import VisibilitySwitch from '../../components/universal/VisibilitySwitch';
import useVisibility from '../../hooks/useVisibility';

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

  const { visibility, handleVisibility } = useVisibility();

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background Image" />
      <div className="login-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Login</h2>
        <form>
          <input 
            type="username" 
            name="username" 
            placeholder="Username" 
            required 
          />
          <input 
            type={visibility === 'visible' ? 'text' : 'password'} 
            name="password"
            placeholder="Password" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
            required 
          />
          <span id="visibility-switch">
            <VisibilitySwitch
              visibility={visibility} 
              handleVisibility={handleVisibility} 
            />
          </span>
          <button>
            <Link className="submit-btn-link" to="/blog">
              Sign In
            </Link>
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