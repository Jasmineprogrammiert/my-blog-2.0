const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

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

// fire a functino after doc saved to db
UserSchema.post('save', function (doc, next) {
  console.log('New user was created & saved', doc);
  next(); 
});

// fire a functino before doc saved to db
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);