const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  /*surname: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  active: {
    type: Boolean,
  },*/
});

//const userSchemaSchema = mongoose.model('userSchema', mongoSchema);

function validateuserSchema(userSchema) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    surname: Joi.string()
      .min(3)
      .max(30)
      .required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    repeat_password: Joi.ref('password'),
  });

  return schema.validate(userSchema);
}

module.exports = { userSchema };
//exports.validate = validateuserSchema;
