import { AppError } from '../../../../utils/AppError'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class FindByTitleService {
  private readonly tasksRepositories: TasksRepositories

  constructor(repository: TasksRepositories) {
    this.tasksRepositories = repository
  }

  async execute(title: string, email: string): Promise<Task[] | undefined> {
    const result = await this.tasksRepositories.findByTitle(title)

    const tasks: Task[] = []
    if (result) {
      result.forEach((task) => {
        if (task.user_email === email) {
          tasks.push(task)
        }
      })
      return tasks
    }

    throw new AppError('Task not found', 404)
  }
}

export { FindByTitleService }
