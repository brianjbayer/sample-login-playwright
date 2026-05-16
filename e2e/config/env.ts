export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const env = {
  baseURL: requireEnv('BASE_URL'),
  login: {
    username: requireEnv('LOGIN_USERNAME'),
    password: requireEnv('LOGIN_PASSWORD'),
  },
};
