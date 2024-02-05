import axios from "axios";
import { useContext } from "react";
// hooks & contexts
import useButtonVariants from "../../hooks/useButtonVariants";
import { AuthContext } from "../../context/AuthContext";
// styles
import { AnimatePresence, motion } from "framer-motion";

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

const ModalDelete = ({ info, setModalShow, setHidden }) => {
  const { user, dispatch } = useContext(AuthContext);
  const { buttonVariants } = useButtonVariants();

  const handleDelete = async e => {
    e.preventDefault();
    setHidden();
    dispatch({ type: "DELETE_START" });
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`);
      setModalShow(false);
      dispatch({ type: "DELETE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "DELETE_FAILURE" });
    }
  };
  const handleCancel = () => {
    setModalShow(false);
  }

  return (
    <>
    <AnimatePresence>
      <motion.div className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="modal" variants={modal}>
          <p>Permanently delete your {info}?</p>
          <motion.button 
            type="submit" 
            id="modal-delete-btn"
            className="next-btn next-btn-l" variants={buttonVariants} whileHover="hover" 
            onClick={handleDelete}
          >
            Delete
          </motion.button>
          <motion.button 
            type="button" 
            id="modal-delete-btn"
            className="next-btn" variants={buttonVariants} whileHover="hover" 
            onClick={() => {
              handleCancel();
              setHidden();
            }}
          >
            Cancel
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    </>
  )
}

export default ModalDelete;
