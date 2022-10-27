import Joi from 'joi'

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  due_date: Joi.date().required(),
})

export { createTaskSchema }
