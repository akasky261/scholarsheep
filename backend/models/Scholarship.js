const mongoose = require('mongoose');

const ScholarshipSchema = new mongoose.Schema({
  name: String,
  description: String,
  eligibility: String,
  deadline: String,
  link: String
});

module.exports = mongoose.model('Scholarship', ScholarshipSchema);
