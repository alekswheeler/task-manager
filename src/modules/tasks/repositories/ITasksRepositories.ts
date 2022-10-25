import { ICreateTaskDTO } from '../dtos/createTaskDTO'
import { Task } from '../entities/Task'

interface ITasksRepositories {
  save(data: ICreateTaskDTO): Promise<Task | undefined>
  list(email: string): Promise<Task[]>
  findByTitle(title: string): Promise<Task[] | undefined>
  delete(title: string): Promise<boolean>
}

export { ITasksRepositories }
