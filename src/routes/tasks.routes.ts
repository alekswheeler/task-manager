import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController'
import { DeleteTaskController } from '../modules/tasks/useCases/deleTask/DeleteTaskController'
import { FindByTitleController } from '../modules/tasks/useCases/findBtyTitle/FindByTitleController'
import { ListTasksController } from '../modules/tasks/useCases/listTasks/ListTasksController'

const createTaskController = new CreateTaskController()
const listTasksController = new ListTasksController()
const deleteTaskController = new DeleteTaskController()
const findByTitleController = new FindByTitleController()

const tasksRoutes = Router()

tasksRoutes.post('/', ensureAuthenticated, createTaskController.handle)
tasksRoutes.get('/', ensureAuthenticated, listTasksController.handle)
tasksRoutes.delete('/:title', ensureAuthenticated, deleteTaskController.handle)
tasksRoutes.get('/:title', ensureAuthenticated, findByTitleController.handle)

export { tasksRoutes }
