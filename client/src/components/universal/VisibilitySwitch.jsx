import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const VisibilitySwitch = ({ visibility, handleVisibility }) => {

  return (
    <>
    <div onClick={handleVisibility}>
      {visibility === 'visible' ?
        <VisibilityOutlinedIcon 
          // id="visibility-icon" 
        /> 
        : <VisibilityOffOutlinedIcon 
            // id="visibility-icon" 
          />
      }
    </div>
    </>
  )
}

export default VisibilitySwitch;