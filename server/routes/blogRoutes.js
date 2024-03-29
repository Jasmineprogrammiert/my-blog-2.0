const router = require("express").Router();
const blogController = require("../controllers/blogController");

// CRUD
router.post("/", blogController.createBlog);
router.get("/", blogController.allBlogs);
router.get("/:url_title", blogController.singleBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;