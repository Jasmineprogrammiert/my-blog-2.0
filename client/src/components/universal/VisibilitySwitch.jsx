import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const VisibilitySwitch = ({ theme, toggleTheme }) => {
  return (
    <>
    <IconButton 
      id="modeSwitch"
      sx={{ ml: 1 }}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? 
        <DarkModeOutlinedIcon sx={{ fontSize: "28px" }} /> 
        : <LightModeOutlinedIcon sx={{ fontSize: "28px" }} />
      }
    </IconButton>
    </>
  )
}