import { motion } from "framer-motion";
import useButtonVariants from "../../hooks/useButtonVariants";

const NextButton = () => {
  const { buttonVariants } = useButtonVariants();

  return (
    <>
    <motion.button className="next-btn" variants={buttonVariants} whileHover="hover">
      Next
    </motion.button>
    </>
  )
}

export default NextButton;