const mongoose = require('mongoose');






mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/user', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries
mongoose.set('debug', true);