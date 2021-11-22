import { ISession } from "../shared";

export interface IUser {
  userName(session: ISession, userName: any);
  id: number
  firstName: string
  lastName: string
  UserName: string
}
