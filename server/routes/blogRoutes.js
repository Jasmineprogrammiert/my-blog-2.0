const router = require('express').Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.allBlogs);
router.get('/:id', blogController.singleBlog);
// router.post('/', blogController.newBlog);

module.exports = router;