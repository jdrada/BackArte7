//sample for generating migrations

import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ["dist/**/*.entity.js"],
  dropSchema: true,
  synchronize: true,
  migrations: ["dist/shared/migrations/**/*{.ts,.js}"],
  migrationsRun: false,
  extra: {
    ssl: true,
  },
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/**
 * Command for generating migrations
 * npm run typeorm -- -d dist/db/data-source.js migration:generate ./src/shared/migrations/newMigration
 * / */
