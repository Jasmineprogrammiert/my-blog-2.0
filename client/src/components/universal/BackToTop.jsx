import Avatar from '@mui/material/Avatar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BackToTop from "react-back-to-top-button";

const BackToTopp = () => {
  return (
    <>
    <BackToTop
      showOnScrollDown
      showAt={100}
      speed={3000}
      easing="easeInOutQuint"
    >
      <Avatar 
        sx={{ height: '40px', width: '40px' }}
        id={`backtoTop-icon-container`}
      >
        <KeyboardArrowUpIcon id="backtoTop-icon" />
      </Avatar>
    </BackToTop>
    </>
  )
}

export default BackToTopp;