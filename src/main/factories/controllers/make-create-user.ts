import { UserInputData } from "../../../data/types/input";
import { UserOutputData } from "../../../data/types/output";
import { CreateUserUseCase } from "../../../data/use-cases/ceate-user.usecase";
import { HashGenerator } from "../../../infra/helpers/hash-helper";
import { UserRepository } from "../../../infra/repositories/user.repository";
import { IController } from "../../../presentation/controllers/abstract/controller";
import { CreateUserController } from "../../../presentation/controllers/create-user.controller";

export const makeCreateUserController = (): IController<UserInputData, UserOutputData> =>{
    const userRepository = new UserRepository();
    const hashGenerator = new HashGenerator();
    const createUserUserUseCase = new CreateUserUseCase(userRepository, hashGenerator);
    const createUserController = new CreateUserController(createUserUserUseCase);
    return createUserController;
}