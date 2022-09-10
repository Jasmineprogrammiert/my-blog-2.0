const User = require('../models/userModel');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicated email
  if (err.cide === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validatino errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create: post
const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
    res.send('new signup');
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).send('error, user not created');
  }
}
const logIn = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('user login');
}

// read: get
const allSignUp = (req, res) => {
  res.render('signup');
}
const allLogIn = (req, res) => {
  res.render('login');
}

// // update
// const updateBlog = async (req, res) => {
//   try {
//     const updateBlog = await Blog.findByIdAndUpdate
//     (
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updateBlog);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

// // delete
// const deleteBlog = async (req, res) => {
//   const blog = await Blog.findById(req.params.id);
//   try {
//     await blog.delete();
//     res.status(200).json('Blog is deleted');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

module.exports = {
  signUp,
  logIn,
  allSignUp,
  allLogIn
}