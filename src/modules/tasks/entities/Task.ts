/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('tasks')
class Task {
  @PrimaryColumn({
    type: 'varchar',
    length: 255,
  })
  title: string

  @Column({
    type: 'varchar',
    length: 255,
  })
  description: string

  @Column({
    type: 'timestamp',
  })
  due_date: string

  @Column({
    type: 'timestamp',
  })
  created_at: string

  @Column({
    type: 'timestamp',
  })
  updated_at: string

  @Column({
    type: 'varchar',
    length: 255,
  })
  user_email: string

  constructor(
    title: string,
    description: string,
    due_date: string,
    email: string,
  ) {
    const date = new Date().toISOString()
    this.title = title
    this.description = description
    this.due_date = due_date
    this.user_email = email
    this.created_at = date
    this.updated_at = date
  }
}

export { Task }
