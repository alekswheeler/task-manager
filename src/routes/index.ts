import { Router } from 'express'
import { verifyUserCredentials } from '../middlewares/verifyUserCredentials'
import { createUserController } from './users.routes'

const router = Router()

router.use('/users', verifyUserCredentials, createUserController.handle)

export { router }
