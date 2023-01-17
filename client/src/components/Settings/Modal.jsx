import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { 
    y: "200px", 
    opacity: 1,
    transition: { delay: 0.5 }
  },
}
const setHidden = () => {
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
};

const Modal = () => {
  return (
    <>
    <motion.div className="backdrop"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="modal"
        variants={modal}
      >
        <p>Update Successful !</p>
        <Link to="/settings">
          <button onClick={setHidden}>Back to Settings</button>
        </Link>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Modal;