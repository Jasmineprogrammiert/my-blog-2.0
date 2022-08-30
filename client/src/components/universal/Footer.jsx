import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';

const Footer = () => {
  return (
  <>
  <div id="footer">
    <a href="https://www.instagram.com/deinelieblingsjasmin/" target="_blank">
      <InstagramIcon className="ins-icon" />
    </a>
    <footer>
      <small>
        Copyright © 2022 Jasmine Zeng. All rights reserved.
      </small>
    </footer>
    <a href="#top">
      <Avatar 
        sx={{ height: '40px', width: '40px' }}
        className="backtoTop-icon-container"
      >
        <KeyboardArrowUpIcon className="backtoTop-icon" />
      </Avatar>
    </a>
  </div>
  </>
  )
}

export default Footer;