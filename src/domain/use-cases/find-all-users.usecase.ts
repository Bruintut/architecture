import { UserEntity } from "../entities/user.entity";

export interface IFindAllUsersUseCase{
    execute(): Promise<UserEntity[]>;
}