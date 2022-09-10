const User = require('../models/userModel');

const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { username: '', email: '', password: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.username = 'This username is already registered';
    errors.email = 'This email is already registered';

    return errors;
  };

  // validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    });
  };

  return errors;
}

// create: post
const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}
const logIn = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('User login');
}

// read: get
const allSignUp = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}
const allLogIn = async (req, res) => {
  res.render('login');
}

module.exports = {
  signUp,
  logIn,
  allSignUp,
  allLogIn
}