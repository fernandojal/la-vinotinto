export type IAction = {
  type: string;
  payload?: any;
  error?: any;
};

export type User = {
  email: string;
  name: string;
  lastName: string;
  rol: string;
  password: string;
};

export type Identify = string | number;
