import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import useVisibility from "../../hooks/useVisibility";
import VisibilitySwitch from "../universal/VisibilitySwitch";

const UpdatePwd = () => {
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);
  const { visibility, handleVisibility } = useVisibility();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      _id: user._id,
      password,
    };
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type={visibility === 'visible' ? 'text' : 'password'} 
        name="password"
        placeholder="New password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
        title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
        required
        onChange={e => setPassword(e.target.value)}
      />
      <span id="visibility-switch">
        <VisibilitySwitch
          visibility={visibility} 
          handleVisibility={handleVisibility}
        />
      </span>

      <button className="submit-btn" type="submit">
        Update
      </button>
      {success && (
        <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
          Profile has been updated...
        </span>
      )}
    </form>
    </>
  )
}

export default UpdatePwd;