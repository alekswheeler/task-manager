import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController'

const createTaskController = new CreateTaskController()

const tasksRoutes = Router()

tasksRoutes.post('/', ensureAuthenticated, createTaskController.handle)

export { tasksRoutes }
