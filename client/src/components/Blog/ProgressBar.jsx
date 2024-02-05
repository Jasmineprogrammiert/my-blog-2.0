import { motion, useScroll } from "framer-motion";
import useYScroll from "../../hooks/useYScroll";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const { hideBar } = useYScroll();

  return (
    <>
    <motion.div
      className={`progress-bar ${hideBar}`}
      style={{ scaleX: scrollYProgress }}
    />
    </>
  )
}

export default ProgressBar;