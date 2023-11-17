import { useState } from 'react';
import { Link } from 'react-router-dom';
import useContainerVariants from '../../hooks/useContainerVariants';
// styles
import { motion } from 'framer-motion';
import bgImg from '../../assets/img/Settings/floral-1.jpg';
import NextButton from '../../components/Settings/NextButton';

const Settings = () => {
  const selected = ['Username', 'Email', 'Password'];
  const [update, setUpdate] = useState({ select: '' });
  const confirmSelect = select => {
    setUpdate({ ...update, select })
  };

  const { containerVariants } = useContainerVariants();
  const nextVariants = {
    hidden: { 
      x: '-100vw'
    },
    visible: {
      x: '2.5vw',
      transition: { type: 'spring', stiffness: 120 }
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
        <h2>Update</h2>
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
      </motion.div>
    </div>
    </>
  )
}

export default Settings;