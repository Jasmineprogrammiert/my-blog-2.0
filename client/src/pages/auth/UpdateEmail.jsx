import { useState, useContext } from 'react';
import axios from 'axios';
// hooks & contexts
import { AuthContext } from "../../context/AuthContext";
import useContainerVariants from '../../hooks/useContainerVariants';
import useButtonVariants from '../../hooks/useButtonVariants';
// styles
import { motion } from 'framer-motion';
import bgImg from '../../assets/img/Settings/floral-1.jpg';

const UpdateEmail = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      _id: user._id,
      email,
    };
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  const { containerVariants } = useContainerVariants();
  const { buttonVariants } = useButtonVariants();

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background" />
      <motion.div className="login-content update-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="New email"
            required
            onChange={e => setEmail(e.target.value)}
          />

          <motion.button 
            className="submit-btn" type="submit"
            variants={buttonVariants} whileHover="hover"
          >
            Update
          </motion.button>
          {success && (
            <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
              Profile has been updated...
            </span>
          )}
        </form>
      </motion.div>
    </div>
    </>
  )
}

export default UpdateEmail;