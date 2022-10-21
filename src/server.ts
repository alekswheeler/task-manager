import express from 'express'
import { createConnection } from './databaseConnection'
import 'reflect-metadata'
import { User } from './modules/users/entities/User'
import { UsersRepositories } from './modules/users/repositories/implementations/usersRepositories'

const app = express()

app.use(express.json())

const AppDataSource = createConnection()

app.get('/hello', (req, res) => {
  AppDataSource.getRepository(User)
  return res.status(200).json({ message: 'Hello World!' })
})

app.post('/user', async (req, res) => {
  const { name, email, age, password } = req.body

  const usersRepositories = new UsersRepositories(
    AppDataSource.getRepository(User),
  )

  const user = await usersRepositories.save({ name, email, age, password })

  return res.status(200).json(user)
})

app.listen(3333, () => {
  console.log('Server started on port 3333!!')
})
