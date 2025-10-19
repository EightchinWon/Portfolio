const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname:  { type: String, required: true, trim: true },
    email:     { type: String, required: true, lowercase: true, trim: true }
  },
  { collection: 'Contact', timestamps: true }
);

module.exports = mongoose.model('Contact', contactsSchema);