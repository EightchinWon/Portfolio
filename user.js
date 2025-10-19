const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    created:  { type: Date, default: Date.now },
    updated:  { type: Date, default: Date.now }
  },
  { collection: 'user' }
);

userSchema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = mongoose.model('user', userSchema);