import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class alterTableTasks1666643858270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tasks',
      new TableColumn({
        name: 'time',
        type: 'integer',
        isNullable: true,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tasks', 'time')
  }
}
