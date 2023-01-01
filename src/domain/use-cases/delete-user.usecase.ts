import { UserEntity } from "../entities/user.entity";

export interface IDeleteUserUseCase{
    execute(userId: string): Promise<UserEntity>;
}