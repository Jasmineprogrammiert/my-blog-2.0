import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Footer = () => {
  return (
  <>
  <div id="contact">
    <a href="https://github.com/Jasmineprogrammiert" target="_blank">
      <InstagramIcon className="icons" />
    </a>
    <footer>
      <small>
        Copyright © 2022 Jasmine Zeng. All rights reserved.
      </small>
    </footer>
    <a href="#top">
      <KeyboardDoubleArrowUpIcon className="icon" />
    </a>
  </div>
  </>
  )
}

export default Footer;