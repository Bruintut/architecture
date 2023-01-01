import { UserEntity } from "../entities/user.entity"

export default class UserService{
    constructor(private readonly userEntity: UserEntity, private readonly userService: UserService) {}

    Users: string[] = [];
    
    async getUsers(users): Promise<UserService[]>{
       const allUsers = await this.userService.getUsers(this.Users.length);
        return allUsers;

    }
    
    async getUser(userId: string): Promise<UserService>{
        const IndexUser = await this.Users.indexOf(userId);
        const user = await this.userService.getUser(userId);
        return user;
    }
    
    async createUser(user: UserEntity){
        const newUser = await this.userService.createUser(user);
        if(!user.username || user.firstName || !user.lastName || !user.email || !user.password){
            throw new Error('fill in all information ');
        }
        this.Users.push(newUser);

        return newUser;
    }

    async updateUser(user: UserEntity){
        const updatedUser = await this.userService.updateUser(user);

        if(!user.userId){
            throw new Error('enter a valid userId ')
        }
        this.Users.push(updatedUser);
        return updatedUser;
    }

    async deleteUser(userId: string, user: UserEntity){
        const deletedUser = await this.userService.deleteUser(userId, user);
        if(!user.userId){
            throw new Error('enter a valid userId ')
        }
        this.Users.splice(this.Users.indexOf(userId), 1)
    }
}