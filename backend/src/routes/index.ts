import { Router } from 'express'
import { tasksRoutes } from './tasks.routes'
import { usersRoutes } from './users.routes'
import 'express-async-errors'

const router = Router()

router.use('/users', usersRoutes)
router.use('/tasks', tasksRoutes)

export { router }
