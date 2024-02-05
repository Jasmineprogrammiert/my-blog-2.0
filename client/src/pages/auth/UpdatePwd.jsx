import { useState, useContext } from "react";
import axios from "axios";
// hooks & contexts
import { AuthContext } from "../../context/AuthContext";
import useUpdateInfoVariants from "../../hooks/useUpdateInfoVariants";
import useButtonVariants from "../../hooks/useButtonVariants";
// styles
import { motion } from "framer-motion";
import bgImg from "../../assets/img/Settings/floral-1.jpg";
import useVisibility from "../../hooks/useVisibility";
import VisibilitySwitch from "../../components/universal/VisibilitySwitch";
import Modal from "../../components/Settings/Modal";

const UpdatePwd = () => {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const { visibility, handleVisibility } = useVisibility();
  const { updateInfoVariants } = useUpdateInfoVariants();
  const { buttonVariants } = useButtonVariants();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      _id: user._id,
      password,
    };
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background" />
      <motion.div className="login-content update-content"
        variants={updateInfoVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form onSubmit={handleSubmit}>
        <input 
          type={visibility === "visible" ? "text" : "password"} 
          name="password"
          placeholder="New password"
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

        <motion.button 
          className="submit-btn" type="submit"
          variants={buttonVariants} whileHover="hover"
        >
          Update
        </motion.button>
        </form>
      </motion.div>
      { success && ( <Modal info="password" /> )}
    </div>
    </>
  )
}

export default UpdatePwd;
