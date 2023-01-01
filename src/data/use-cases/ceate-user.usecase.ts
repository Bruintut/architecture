import {ICreateUserUseCase} from "../../domain/use-cases/create-user.usecase";
import {IUserRepository} from "../repositories/user-repository.data"
import { UserInputData } from "../types/input";
import { UserOutputData } from "../types/output";
import randomUUID from "crypto-randomuuid";
import { IHashGenerator } from "../utils/interfaces/hash-generator.interface";


export class CreateUserUseCase implements ICreateUserUseCase{
    constructor(private readonly userRepository: IUserRepository,
        private readonly hashGenerator: IHashGenerator){}

    async execute(data: UserInputData): Promise<UserOutputData>{
        if (!data.username || !data.firstName || data.lastName || data.email){
            throw new Error('Falta parametros')
        }

        const hashedPassword = await this.hashGenerator.hash(data.password, 10)

        const user: UserOutputData={
            userId: randomUUID(),
            username:data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hashedPassword,
        }
        return await this.userRepository.createUser(user)
    }

}