import { config as dotenv } from 'dotenv';
dotenv();

interface Config {
  env: string;
  port: number;
}

const env = process.env.NODE_ENV || 'development';

const base: Config = {
  env,
  port: Number(process.env.PORT) || 3000,
};

const config: { [key: string]: Config } = {
  development: { ...base },
  test: { ...base },
  production: { ...base },
};

export default config[env];
