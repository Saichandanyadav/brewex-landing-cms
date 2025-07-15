const mongoose = require('mongoose');

const headingSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

module.exports = mongoose.model('Heading', headingSchema);
