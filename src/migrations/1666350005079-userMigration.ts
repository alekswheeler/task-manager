import { MigrationInterface, QueryRunner } from 'typeorm'

export class userMigration1666350005079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE users (name varchar(155), email varchar(255) PRIMARY KEY, password varchar(255), age int, created_at timestamp)',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
