import {
  DB_AUTO_RECONNECT,
  DB_RECONNECT_INTERVAL,
  DB_RECONNECT_TRIES,
} from '@galaxy-fortune/common';
import { ConnectionOptions } from "typeorm";

export default {
  type: "mysql",
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'payment',
  synchronize: true,
  logging: true,
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