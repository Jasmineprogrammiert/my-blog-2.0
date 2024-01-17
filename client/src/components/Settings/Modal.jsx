import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useButtonVariants from '../../hooks/useButtonVariants';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
const modal = {
  hidden: { 
    y: "-100vh", 
    opacity: 0 
  },
  visible: { 
    y: "200px", 
    opacity: 1,
    transition: { delay: .5 }
  },
}
const setHidden = () => {
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
};

const Modal = ({ info }) => {
  const { buttonVariants } = useButtonVariants();

  return (
    <>
    <AnimatePresence>
      <motion.div className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="modal"
          variants={modal}
        >
          <p>Your {info} has been reset successfully {`:D`}</p>
          <Link to="/settings">
            <motion.button onClick={setHidden} variants={buttonVariants} whileHover="hover" className="modal-text">
              Back to Settings
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Modal;
