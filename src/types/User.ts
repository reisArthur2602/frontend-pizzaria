export type UserRequest = {
  email: string;
  password: string;
};

export type UserAuthenticatedResponse = {
  user: { email: string; password: string };
  token: string;
};
