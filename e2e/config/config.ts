import { env } from './env';

export const config = {
  baseURL: env.baseURL,

  loginCredentials: {
    username: env.login.username,
    password: env.login.password,
  },
};
