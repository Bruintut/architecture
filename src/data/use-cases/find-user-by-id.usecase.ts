import { UserEntity } from "../../domain/entities/user.entity";
import { IFindUserByIdUseCase } from "../../domain/use-cases/find-user-by-id.usecase";
import { IUserRepository } from "../repositories/user-repository.data";

export class findUserByIdUseCase implements IFindUserByIdUseCase{
    constructor(private readonly userRepository: IUserRepository){}
    async execute(userId: string): Promise<UserEntity> {
      return await this.userRepository.findUserById(userId);  
    }
}