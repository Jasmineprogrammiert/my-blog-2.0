const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { username: '', email: '', password: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.username = 'This username or email is already registered';
    errors.email = 'This username or email is already registered';

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

const maxAge = 1 * 24 * 60 * 60; // one day
const createToken = id => {
  return jwt.sign({ id }, 'user secret', {
    expiresIn: maxAge
  });
}

// create: post
const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}
const logIn = async (req, res) => {
  res.json({ msg: 'login user'});

  // const { email, password } = req.body;

  // try {
  //   const user= await User.login(username, password);
  //   res.status(200).json({ user: user._id});
  // }
  // catch (err) {
  //   res.status(400).json({});
  // }
  // const { username, email, password } = req.body;

  // try {
  //   const user = await User.findOne({ username: req.body.username });
  //   !user && res.status(400).json("Wrong credentials!");

  //   const validated = await bcrypt.compare(req.body.password, user.password);
  //   !validated && res.status(400).json("Wrong credentials!");

  //   const { password, ...others } = user._doc;
  //   res.status(200).json(others);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
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