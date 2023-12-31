
const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  
    email: {
        type: String,
        required: true,
        unique: true,
        validate: { 
          validator: function(v) {
              return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
          }
      }
    },


    freinds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  
  
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
},
  
  
  
  
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



// Initialize our User model
const User = model('user', userSchema);

module.exports = User;










































// const { Schema, model } = require('mongoose');

// // Schema to create User model
// const userSchema = new Schema(
//   {
//     first: String,
//     last: String,
//     age: Number,
//     videos: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'video',
//       },
//     ],
//   },
//   {
//     // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
//     // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }
// );

// // Create a virtual property `fullName` that gets and sets the user's full name
// userSchema
//   .virtual('fullName')
//   // Getter
//   .get(function () {
//     return `${this.first} ${this.last}`;
//   })
//   // Setter to set the first and last name
//   .set(function (v) {
//     const first = v.split(' ')[0];
//     const last = v.split(' ')[1];
//     this.set({ first, last });
//   });

// // Initialize our User model
// const User = model('user', userSchema);

// module.exports = User;
