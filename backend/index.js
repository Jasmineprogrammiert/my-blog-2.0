const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');
const categoriesRoutes = require('./routes/categories');
const multer = require('multer');

const app = express();

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images')
    }, 
    filename: (req, file, cb) => {
      cb(null, req.body.name)
    }
  });

  const upload = multer({storage: storage})
  app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded')
  })

  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/blogs', blogRoutes);
  app.use('/api/categories', categoriesRoutes);

  app.listen('8000', () => {
    console.log('Backend is running');
});