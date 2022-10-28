/* eslint-disable camelcase */
import { AppError } from '../../../../utils/AppError'
import { ICreateTaskDTO } from '../../dtos/createTaskDTO'
import { Task } from '../../entities/Task'
import { ITasksRepositories } from '../../repositories/ITasksRepositories'

class CreateTaskService {
  private readonly tasksRepositories: ITasksRepositories

  constructor(repository: ITasksRepositories) {
    this.tasksRepositories = repository
  }

  async execute({
    title,
    description,
    due_date,
    time,
    email,
  }: ICreateTaskDTO): Promise<Task | undefined> {
    const data: ICreateTaskDTO = {
      title,
      description,
      due_date,
      email,
      time,
    }

    const task = await this.tasksRepositories.save(data)

    if (!task) {
      throw new AppError('Task already exists', 400)
    }

    return task
  }
}

export { CreateTaskService }
