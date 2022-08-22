const Blog = require('../models/blog');

const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

const newBlog = async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  allBlogs,
  singleBlog,
  newBlog,
}