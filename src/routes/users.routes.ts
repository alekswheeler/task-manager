import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController'
import { CreateLoginController } from '../modules/users/useCases/loginUser/CreateLoginController'
import { verifyUserCredentials } from '../middlewares/verifyUserCredentials'
import { Router } from 'express'

const createUserController = new CreateUserController()
const createUserLoginController = new CreateLoginController()

const usersRoutes = Router()

usersRoutes.post('/', verifyUserCredentials, createUserController.handle)
usersRoutes.post('/login', createUserLoginController.handle)

export { usersRoutes }
