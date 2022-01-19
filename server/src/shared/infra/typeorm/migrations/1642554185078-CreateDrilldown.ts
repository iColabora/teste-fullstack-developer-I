import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDrilldown1642554185078
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks_drilldowns',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'instance',
            type: 'bigint',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'protocol',
            type: 'varchar',
          },
          {
            name: 'scale',
            type: 'varchar',
          },
          {
            name: 'start',
            type: 'varchar',
          },
          {
            name: 'sla',
            type: 'varchar',
          },
          {
            name: 'request_type',
            type: 'varchar',
          },
          {
            name: 'operator',
            type: 'varchar',
          },
          {
            name: 'task_id',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_drilldown_task',
            referencedTableName: 'tasks',
            referencedColumnNames: ['task_id'],
            columnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks_drilldowns');
  }
}
