const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    // required: true,
  },
  displayName: {
    type: String,
    // required: true,
  },
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    default:undefined
  },
  google_image: {
    type: String,
    default:undefined
  },
  path:{
    type: String,
  },
  email:{
    type: String,
  },
  Mobile:{
    type: String,
  },
  aboutme:{
    type: String,
  },
  Gender:{
    type: String,
  },
  dateOfBirth:{
    type: String,
  },
  lastLogin:{
    type: Date,
  }
},{
    timestamps: true,
    strict: false,
  })

const User = mongoose.model('User', UserSchema)

module.exports = User