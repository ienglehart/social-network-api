const { Schema, module } = require('mongoose');

const User = new Thought({
    thoughtText: {
      type: String
      //required  
      //1-258 characters
    },
    createdAt: {
      //date
      //timestamp
      //format timestamp
    },
    username: {
      //string 
      //req
    },
    reactions: {
      //array of nested docs with reaction schema
    },
  });

  // create the model using the ThoughtSchema
const User = model('Thought', ThoughtSchema);

// export the model
module.exports = Thought;