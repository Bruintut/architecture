/* import IUserRepository from "./data/repositories/user-repository.data";
import { UserEntity } from "./domain/entities/user.entity";

class UserRepositorySpy implements IUserRepository{
    private users =[];
    createUser(data: UserEntity): Promise<UserEntity>{
        this.users.push(data);
        return Promise.resolve(data);
    }
} */