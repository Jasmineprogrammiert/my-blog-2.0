const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    coverImg: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    category: {
      type: Array,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    bannerImg: {
      type: String,
      required: false,
    },
    description: {
      type: Object,
      required: true,
    },
  }, { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);