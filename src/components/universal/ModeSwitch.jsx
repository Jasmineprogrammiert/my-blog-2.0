import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const ModeSwitch = ({ theme, toggleTheme }) => {
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

export default ModeSwitch;