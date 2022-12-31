import { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// hooks and contexts
import { AuthContext } from '../../context/AuthContext';
import useVisibility from '../../hooks/useVisibility';
// styles
import bgImg from '../../assets/img/Settings/floral-1.jpg';
import VisibilitySwitch from '../universal/VisibilitySwitch';

const Settings = () => {
  // const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);
  // const PF = 'http://localhost:8000/images/';

  const { visibility, handleVisibility } = useVisibility();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      _id: user._id,
      username,
      email,
      password,
    };
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append('name', filename);
    //   data.append('file', file);
    //   updatedUser.profilePic = filename;
    //   try {
    //     await axios.post('/upload', data);
    //   } catch (err) {}
    // }
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });

      console.log('----------- res.data --------');
      console.log(res.data);
      console.log('----------- updated User --------');
      console.log(updatedUser);

    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background" />
      <div className="login-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Update</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="username" 
            name="username"
            placeholder={user.username}
            pattern="[A-Za-z0-9-_.]{4,25}"
            title="The usernaem must be 4-25 long, with letters, numbers, hyphens, underscores or periods only. No punctuation or special characters are allowed."
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="New email"
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type={visibility === 'visible' ? 'text' : 'password'} 
            name="password"
            placeholder="New password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one digit, one uppercase and lowercase letter, and at least 8 or more characters" 
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
          {/* <Link className="pwd-recovery" to="/pwdrecovery">
            <p>Delete Account</p>
          </Link> */}
        </form>
      </div>
    </div>
    </>
  )
}

export default Settings;