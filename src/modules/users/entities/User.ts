import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
class User {
  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string

  @PrimaryColumn({
    type: 'varchar',
    length: 255,
  })
  email: string

  @Column({
    type: 'int',
  })
  age: number

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string

  @Column({
    type: 'timestamp',
  })
  created_at: string

  constructor(name: string, email: string, age: number, password: string) {
    this.name = name
    this.email = email
    this.age = age
    this.password = password
    this.created_at = new Date().toISOString()
  }
}

export { User }
