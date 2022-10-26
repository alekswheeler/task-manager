import Joi from 'joi'

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  age: Joi.number().required(),
})

export { createUserSchema }
