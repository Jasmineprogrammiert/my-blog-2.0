import { useState } from "react";
import { Link } from "react-router-dom";
// hooks & contexts
import useContainerVariants from "../../hooks/useContainerVariants";
import useButtonVariants from "../../hooks/useButtonVariants";
// styles
import { motion } from "framer-motion";
import bgImg from "../../assets/img/Settings/floral-1.jpg";
import NextButton from "../../components/Settings/NextButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ModalDelete from "../../components/Settings/ModalDelete";

const Settings = () => {
  const selected = ["Username", "Email", "Password"];
  const [selectedInterface, setSelectedInterface] = useState("Update"); 
  const [update, setUpdate] = useState({ select: "" });
  const [modalShow, setModalShow] = useState(false);
  const confirmSelect = select => {
    setUpdate({ ...update, select })
  };

  const { containerVariants } = useContainerVariants();
  const { buttonVariants } = useButtonVariants();
  const nextVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: "2.5vw",
      transition: { type: "spring", stiffness: 120 }
    } 
  };
  const setHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const switchInterface = () => {
    setSelectedInterface(selectedInterface === "Update" ? "Delete" : "Update");
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
        {selectedInterface === "Update" ? (
          <>
          <ul>
            {selected.map(select => {
              let selectClass = update.select === select ? "active" : "";
              return (
                <motion.li 
                  key={select} 
                  onClick={() => confirmSelect(select)}
                  whileHover={{ scale: 1.2, originX: -.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={selectClass}>
                    { select }
                  </span>
                </motion.li>
              )
            })}
          </ul>
          {update.select === "Username" ? (
            <motion.div variants={nextVariants}>
              <Link to="/update-username">
                <NextButton />
              </Link>
            </motion.div>
          ) : update.select === "Email" ? (
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
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedInterface("Delete")}
              id="delete-account"
            >
              Delete Account
            </motion.li>
            <motion.div variants={nextVariants} className="delete-next-btn">
              <motion.button 
                type="button" 
                className="next-btn" variants={buttonVariants} whileHover="hover" 
                onClick={() => {
                  setModalShow(true);
                  setHidden();
                }}
              >
                Delete
              </motion.button>
            </motion.div>
          </ul>
          </>
        )}
        <motion.button onClick={switchInterface} id="setting-switch-l"><ArrowBackIosNewIcon /></motion.button> 
        <motion.button onClick={switchInterface} id="setting-switch-r"><ArrowForwardIosIcon /></motion.button>
      </motion.div>
      { modalShow === true && ( <ModalDelete info="account" setModalShow={setModalShow} setHidden={setHidden} /> )}
    </div>
    </>
  )
}

export default Settings;
