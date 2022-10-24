import { Repository } from 'typeorm'
import { ICreateTaskDTO } from '../../dtos/createTaskDTO'
import { Task } from '../../entities/Task'
import { ITasksRepositories } from '../ITasksRepositories'

class TasksRepositories implements ITasksRepositories {
  private repository: Repository<Task>

  constructor(repository: Repository<Task>) {
    this.repository = repository
  }

  async save(data: ICreateTaskDTO): Promise<Task | undefined> {
    const taskAlreadyExists = await this.findByTitle(data.title)

    if (taskAlreadyExists) {
      return undefined
    }

    const task = new Task(
      data.title,
      data.description,
      data.due_date,
      data.email,
    )

    return this.repository.save(task)
  }

  async findByTitle(title: string): Promise<Task | undefined> {
    const task = await this.repository.findOne({
      where: {
        title,
      },
    })

    if (!task) {
      return undefined
    }

    return task
  }

  async list(email: string): Promise<Task[]> {
    const tasks = await this.repository.find({
      where: {
        user_email: email,
      },
    })

    return tasks
  }

  delete(title: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export { TasksRepositories }
