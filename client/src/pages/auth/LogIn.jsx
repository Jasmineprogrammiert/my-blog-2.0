import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// hooks & contexts
import { AuthContext } from "../../context/AuthContext";
import useContainerVariants from "../../hooks/useContainerVariants";
import useButtonVariants from "../../hooks/useButtonVariants";
import useVisibility from "../../hooks/useVisibility";
// styles
import { motion } from "framer-motion";
import bgImg from "../../assets/img/LogIn/forbidden-city-02.png";
import VisibilitySwitch from "../../components/universal/VisibilitySwitch";

const LogIn = () => {
  const userRef = useRef(); 
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  const { containerVariants } = useContainerVariants();
  const { buttonVariants } = useButtonVariants();
  const { visibility, handleVisibility } = useVisibility();

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background" />
      <motion.div className="login-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
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
            type={visibility === "visible" ? "text" : "password"} 
            name="password"
            placeholder="Password" 
            required
            ref={passwordRef}
          />
          <span id="visibility-switch">
            <VisibilitySwitch
              visibility={visibility} 
              handleVisibility={handleVisibility}
            />
          </span>
          {error && <div className="signup-error">Username or password is incorrect. Please try again.</div>}
          <motion.button 
            className="submit-btn" type="submit" disabled={isFetching} 
            variants={buttonVariants} whileHover="hover"
          >
            Sign In
          </motion.button>
          <Link className="pwd-recovery" to="/pwdrecovery">
            <p>Forget Password</p>
          </Link>
          <Link className="sign-up" to="/signup">
            <p>Sign Up</p>
          </Link>
        </form>
      </motion.div>
    </div>    
    </>
  )
}

export default LogIn;