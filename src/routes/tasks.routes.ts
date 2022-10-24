import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController'
import { ListTasksController } from '../modules/tasks/useCases/listTasks/ListTasksController'

const createTaskController = new CreateTaskController()
const listTasksController = new ListTasksController()

const tasksRoutes = Router()

tasksRoutes.post('/', ensureAuthenticated, createTaskController.handle)
tasksRoutes.get('/', ensureAuthenticated, listTasksController.handle)

export { tasksRoutes }
