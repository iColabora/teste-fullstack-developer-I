const isLocal = process.env.NODE_ENV === 'development';

const entities = isLocal
  ? ['./src/modules/**/infra/typeorm/entities/*.ts']
  : ['./dist/modules/**/infra/typeorm/entities/*.js'];

const migrations = isLocal
  ? ['./src/shared/infra/typeorm/migrations/*.ts']
  : ['./dist/shared/infra/typeorm/migrations/*.js'];

module.exports = [
  {
    name: 'default',
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    logging: !isLocal ? ['error'] : ['query', 'error'],
    entities,
    migrations,
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
];
