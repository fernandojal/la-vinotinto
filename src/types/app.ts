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
  nickname: string;
  sap: number;
  carnet: string;
  position: string;
  company: string;
};

export type Identify = string | number;
