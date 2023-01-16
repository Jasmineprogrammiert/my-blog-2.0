import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const useHandleSubmit = (updatedUserElement) => {
  // const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(AuthContext);
  // const PF = 'http://localhost:8000/images/';

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });

    const updatedUser = {
      _id: user._id,
      updatedUserElement, // how to make it dynamic? 
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
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return { handleSubmit, user, setUsername, email, setEmail, password, setPassword, success, setSuccess };
}

export default useHandleSubmit;