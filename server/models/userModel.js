const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter an username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [8, 'Minimum password length is 8 characters'],
    },
    profilePic: {
      type: String,
      default: '',
    },
  }, { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);