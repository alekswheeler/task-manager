import express from 'express'
import 'reflect-metadata'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.get('/hello', (req, res) => {
  return res.status(200).json({ message: 'Hello World!' })
})

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})
