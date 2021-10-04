export interface ILink {
  _id: string,
  from: string;
  to: string;
  code: string;
  date: Date;
  clicks: number;
  owner: string;
}

export type ToServerLoginData = {
  email: string;
  password: string;
}