import {
  DB_AUTO_RECONNECT,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_RECONNECT_INTERVAL,
  DB_RECONNECT_TRIES,
  DB_USERNAME
} from '@galaxy-fortune/common';
import { ConnectionOptions } from "typeorm";
import { PAYMENT_DB_NAME } from '../constants/env';

export default {
  type: "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: PAYMENT_DB_NAME,
  synchronize: false,
  logging: false,
  autoReconnect: DB_AUTO_RECONNECT,
  reconnectTries: DB_RECONNECT_TRIES,
  reconnectInterval: DB_RECONNECT_INTERVAL,
  entities: [
    __dirname + "/../entity/**/*.{js,ts}"
  ],
  migrations: [
    __dirname + "/../migration/**/*.{js,ts}"
  ],
  subscribers: [
    __dirname + "/../subscriber/**/*.{js,ts}"
  ],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
} as ConnectionOptions