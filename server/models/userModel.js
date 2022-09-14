const mongoose = require('mongoose');
const validator = require('validator');
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
      // validate: [validator.isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      // minlength: [8, 'Minimum password length is 8 characters'],
    },
    profilePic: {
      type: String,
      default: '',
    },
  }, { timestamps: true }
);

// function fired before doc saved to db
// UserSchema.pre('save', async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// function fired after doc saved to db
UserSchema.post('save', function (doc, next) {
  console.log('New user was created & saved', doc);
  next(); 
});

// static signup method 
UserSchema.static.signup = async function (username, email, password) {

  // validation
  if (! username || !email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is invalid');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough');
  }

  const exists = await this.findOne({ username, email });

  if (exists) {
    throw Error('Username or email is already in use');
  }

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash});

  return user;
}

// static login method
UserSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({ username });
  if (!user) {
    throw Error('Incorrect username');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
  
  // const user = await this.findOne({ username });

  // if (user) {
  //   const auth = await bcrypt.compare(password, user.password);
  //   if (auth) {
  //     return user;
  //   };
  //   throw Error('Incorrect password');
  // };
  // throw Error('Incorrect username');
};

module.exports = mongoose.model('User', UserSchema);