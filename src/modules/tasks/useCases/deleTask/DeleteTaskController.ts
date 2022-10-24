import { Request, Response } from 'express'
import { DeleteTaskService } from './DeleteTaskService'

class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { title } = request.params
    const deleteTaskService = new DeleteTaskService()

    const serviceResult = await deleteTaskService
      .execute(title)
      .catch((error) => {
        console.error(error)
        return response.status(500).json({ error: 'internal server error' })
      })

    if (!serviceResult) {
      return response.status(404).json({ error: 'task not found' })
    }

    return response.status(200).json({ message: 'task deleted' })
  }
}

export { DeleteTaskController }
