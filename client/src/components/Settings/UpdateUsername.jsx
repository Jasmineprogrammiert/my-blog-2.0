import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

const UpdateUsername = () => {
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      _id: user._id,
      username,
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
        type="username" 
        name="username"
        placeholder={user.username}
        pattern="[A-Za-z0-9-_.]{4,25}"
        title="The usernaem must be 4-25 long, with letters, numbers, hyphens, underscores or periods only. No punctuation or special characters are allowed."
        required
        onChange={e => setUsername(e.target.value)}
      />

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

export default UpdateUsername;