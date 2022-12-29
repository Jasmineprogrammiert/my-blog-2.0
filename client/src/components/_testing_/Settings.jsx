import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// hooks and contexts
import { AuthContext } from '../../context/AuthContext';
import useVisibility from '../../hooks/useVisibility';
// styles
import bgImg from '../../assets/img/Settings/floral-1.jpg';
import VisibilitySwitch from '../universal/VisibilitySwitch';

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);
  const PF = 'http://localhost:8000/images/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  const { visibility, handleVisibility } = useVisibility();

  return (
    <>
    <div className="login">
      <img src={bgImg} alt="Background" />
      <div className="login-content">
        <h1>Lieblingsjasmin</h1>
        <h2>Update</h2>
        <form 
          onSubmit={handleSubmit}
        >
          
          <input 
            type="username" 
            name="username" 
            // placeholder="New Username" 
            placeholder={user.username} 
            required
            // ref={userRef}
          />
          <input 
            type="email" 
            name="email" 
            // placeholder="New Email"
            placeholder={user.email} 
            required
            // onChange={e => setEmail(e.target.value)}
          />
          <input 
            type={visibility === 'visible' ? 'text' : 'password'} 
            name="password"
            placeholder="New Password" 
            required
            // ref={passwordRef}
          />
          <span id="visibility-switch">
            <VisibilitySwitch
              visibility={visibility} 
              handleVisibility={handleVisibility}
            />
          </span>
          {/* {error && <div className="signup-error">Username or email is incorrect. Please try again.</div>} */}
          <button className="submit-btn" type="submit" 
            // disabled={isFetching}
          >
            Update
          </button>
          {/* <Link className="pwd-recovery" to="/pwdrecovery">
            <p>Forget Password</p>
          </Link>
          <Link className="sign-up" to="/signup">
            <p>Sign Up</p>
          </Link> */}
          <Link className="pwd-recovery" to="/pwdrecovery">
            <p>Delete Account</p>
          </Link>
        </form>
      </div>
    </div>





    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
    </>
  )
}

export default Settings;