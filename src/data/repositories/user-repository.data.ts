import { UserInputData, UserUpdateInputData } from "../types/input";
import { UserOutputData } from "../types/output";

export interface IUserRepository{
   createUser(data: UserInputData): Promise<UserOutputData>;
   updateUser(data: UserUpdateInputData, userId: string): Promise<UserOutputData>
   findUserById(userId: string): Promise<UserOutputData>;
   findAllUsers(): Promise<UserOutputData[]>;
   deleteUser(userId: string): Promise<UserOutputData> 

}