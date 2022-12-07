import { UserCreateRequestDto ,UserGetRequestDto} from '../dto/user.dto';
import { UserRepository } from '../repositories/userRepo';
//import { DoctorLoginRequestDto } from '../dto/doctorLogin.dto';

export class UserService {
    constructor(public userRepo: UserRepository) {}

    async createUser(userData: UserCreateRequestDto) {
        const user = await this.userRepo.CreateUser(userData);

        return UserCreateRequestDto.from(user);
    }


    async GetUser(user1Data: UserGetRequestDto) {
        const user = await this.userRepo.GetUser(user1Data);

        return user;
    }
}