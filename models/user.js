const { Schema, module } = require('mongoose');

const User = new Schema({
    username: {
      type: String
      //unique
      //required  
      //trimmed
    },
    email: {
      type: String
      //unique
      //requierd
      //match a valid email
    },
    thoughts: {
      //array of _id reference thoughts module
    },
    friends: {
      //array of _id reference user module
    },
  });

  // create the model using the UserSchema
const User = model('User', UserSchema);

// export the model
module.exports = User;