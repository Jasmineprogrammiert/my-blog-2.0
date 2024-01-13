import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// hooks & contexts
import useContainerVariants from '../../hooks/useContainerVariants';
import useButtonVariants from '../../hooks/useButtonVariants';
import { AuthContext } from '../../context/AuthContext';
// styles
import { motion } from 'framer-motion';
import bgImg from '../../assets/img/Settings/floral-1.jpg';
import NextButton from '../../components/Settings/NextButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Settings = () => {
  const selected = ['Username', 'Email', 'Password'];
  const [update, setUpdate] = useState({ select: '' });
  const [selectedInterface, setSelectedInterface] = useState('Update'); 
  const confirmSelect = select => {
    setUpdate({ ...update, select })
  };

  const { containerVariants } = useContainerVariants();
  const { buttonVariants } = useButtonVariants();
  const { user, dispatch } = useContext(AuthContext);

  const nextVariants = {
    hidden: { 
      x: '-100vw'
    },
    visible: {
      x: '2.5vw',
      transition: { type: 'spring', stiffness: 120 }
    } 
  };

  // TESTING
  const arrowBtnVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgb(255,255,255)",
      boxShadow: "0 0 8px rgb(255,255,255)",
      transition: {
        duration: .35,
        yoyo: Infinity
      }
    }
  };
  // TESTING

  const switchInterface = () => {
    setSelectedInterface(selectedInterface === 'Update' ? 'Delete' : 'Update');
  };

  const handleDelete = async e => {
    e.preventDefault();
    dispatch({ type: 'DELETE_START' });
    const updatedUser = {
      _id: user._id,
    };
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`, updatedUser);
      dispatch({ type: 'DELETE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'DELETE_FAILURE' });
    }
  };

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background" />
      <motion.div className="login-content settings-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Lieblingsjasmin</h1>
        <h2>{selectedInterface}</h2>
        {selectedInterface === 'Update' ? (
          <>
          <ul>
            {selected.map(select => {
              let selectClass = update.select === select ? 'active' : '';
              return (
                <motion.li 
                  key={select} 
                  onClick={() => confirmSelect(select)}
                  whileHover={{ scale: 1.2, originX: -.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className={selectClass}>
                    { select }
                  </span>
                </motion.li>
              )
            })}
          </ul>
          {update.select === 'Username' ? (
            <motion.div variants={nextVariants}>
              <Link to="/update-username">
                <NextButton />
              </Link>
            </motion.div>
          ) : update.select === 'Email' ? (
            <motion.div variants={nextVariants}>
              <Link to="/update-email">
                <NextButton />
              </Link>
            </motion.div>
          ) : (
            <motion.div variants={nextVariants}>
              <Link to="/update-password">
                <NextButton />
              </Link>
            </motion.div>
          )}
          </>
        ) : (
          <>
          <ul>
            <motion.li 
              whileHover={{ scale: 1.2, originX: -.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setSelectedInterface('Delete')}
              id='delete-account'
            >
              Delete Account
            </motion.li>
            <motion.div variants={nextVariants} className='delete-next-btn'>
              <motion.button 
                type="submit" 
                className="next-btn" variants={buttonVariants} whileHover="hover" 
                onClick={handleDelete}
              >
                Delete
              </motion.button>
            </motion.div>
          </ul>
          </>
        )}
        <motion.button onClick={switchInterface} id='switch-btn-l'><ArrowBackIosNewIcon /></motion.button> 
        <motion.button onClick={switchInterface} id='switch-btn-r'><ArrowForwardIosIcon /></motion.button>
      </motion.div>
    </div>
    </>
  )
}

export default Settings;