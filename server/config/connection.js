const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URI);

// Options should not be needed with mongoose v7^
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/goodDeed', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
});

module.exports = mongoose.connection;