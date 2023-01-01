import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

const UpdateEmail = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      _id: user._id,
      email,
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
        type="email" 
        name="email" 
        placeholder="New email"
        required
        onChange={e => setEmail(e.target.value)}
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

export default UpdateEmail;