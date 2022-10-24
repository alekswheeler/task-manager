import { ICreateTaskDTO } from '../dtos/createTaskDTO'
import { Task } from '../entities/Task'

interface ITasksRepositories {
  save(data: ICreateTaskDTO): Promise<Task | undefined>
  list(): Promise<Task[]>
  findByTitle(title: string): Promise<Task | undefined>
  delete(title: string): Promise<void>
}

export { ITasksRepositories }