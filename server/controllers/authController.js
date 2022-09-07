// const Blog = require('../models/blogModel');

// create: post
const signUp = (req, res) => {
  res.send('new signup');
}
const logIn = (req, res) => {
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