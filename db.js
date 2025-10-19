const mongoose = require('mongoose');

const connectDB = () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('Missing MONGO_URI in .env');
    process.exit(1);
  }
  return mongoose.connect(uri)
    .then(conn => console.log('MongoDB connected:', conn.connection.host))
    .catch(err => { console.error('MongoDB connection error:', err.message); process.exit(1); });
};

module.exports = connectDB;