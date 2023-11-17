import { useState, useContext } from 'react';
import axios from 'axios';
// hooks & contexts
import { AuthContext } from "../../context/AuthContext";
import useUpdateInfoVariants from '../../hooks/useUpdateInfoVariants';
import useButtonVariants from '../../hooks/useButtonVariants';
// styles
import { motion } from 'framer-motion';
import bgImg from '../../assets/img/Settings/floral-1.jpg';
import Modal from '../../components/Settings/Modal';

const UpdateUsername = () => {
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      _id: user._id,
      username, // wanna use useHandleSubmit but have to make this dynamic (don't have a clue yet)
    };
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  const { updateInfoVariants } = useUpdateInfoVariants();
  const { buttonVariants } = useButtonVariants();
  
  const setHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
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
            type="username" 
            name="username"
            placeholder="New Username"
            pattern="[A-Za-z0-9-_.]{4,25}"
            title="The usernaem must be 4-25 long, with letters, numbers, hyphens, underscores or periods only. No punctuation or special characters are allowed."
            required
            onChange={e => setUsername(e.target.value)}
          />
          <motion.button 
            className="submit-btn" type="submit" 
            onClick={setHidden} 
            variants={buttonVariants} whileHover="hover">
            Update
          </motion.button>
        </form>
      </motion.div>
      { success && ( <Modal info="username" /> )}
    </div>
    </>
  )
}

export default UpdateUsername;