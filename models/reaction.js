const { Schema, module } = require('mongoose');

const User = new Reaction({
    reactionId: {
      type: String
      //required  
      //1-258 characters
    },
    reactionBody: {
      //date
      //timestamp
      //format timestamp
    },
    username: {
      //string 
      //req
    },
    createdAt: {
      //array of nested docs with reaction schema
    },
});



// create the model using the ThoughtSchema
// const User = model('Thought', ThoughtSchema);

// export the model
// module.exports = Thought;