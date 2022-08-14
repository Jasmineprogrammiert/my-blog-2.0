const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
  id: {
    type: Number, 
    required: true
  },
  category: {
    type: Object,
    required: true
  },
  title: {
    type: String, 
    required: true
  },
  // date: {
  //   type: String, 
  //   required: true
  // },
  // preview: {
  //   type: String, 
  //   required: true
  // },
  // readTime: {
  //   type: Number, 
  //   required: true
  // },
  // content: {
  //   type: String, 
  //   required: true
  // }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)