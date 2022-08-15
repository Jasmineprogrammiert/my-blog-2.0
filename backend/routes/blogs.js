const router = require('express').Router();
const Blog = require('../models/Blog');

router.post('/', async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const post = await Blog.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         const updatedBlog = await Blog.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedBlog);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json('You can update only your post!');
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// delete blog
// router.delete('/:id', async (req, res) => {
//   try {
//     const post = await Blog.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         await post.delete();
//         res.status(200).json('Blog has been deleted...');
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json('You can delete only your post!');
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get blog
// router.get('/:id', async (req, res) => {
//   try {
//     const post = await Blog.findById(req.params.id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get all blogs
// router.get('/', async (req, res) => {
//   const username = req.query.user;
//   const categoryName = req.query.category;
//   try {
//     let posts;
//     if (username) {
//       posts = await Blog.find({ username });
//     } else if (categoryName) {
//       posts = await Blog.find({
//         categories: {
//           $in: [categoryName],
//         },
//       });
//     } else {
//       posts = await Blog.find();
//     }
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;