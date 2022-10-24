import { MigrationInterface, QueryRunner } from 'typeorm'

export class tasksMigration1666632202309 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE tasks (title varchar(255) PRIMARY KEY, "user_email" varchar(255), description varchar(255) NOT NULL, "due_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, FOREIGN KEY (user_email) REFERENCES users(email))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks')
  }
}
