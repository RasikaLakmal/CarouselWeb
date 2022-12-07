import { UserCreateRequestDto ,UserGetRequestDto} from '../dto/user.dto';
import User from '../models/User';
export class UserRepository {
    public readonly db = User;

    async CreateUser(userData: UserCreateRequestDto) {
        return this.db.create(userData);
    }

    async GetUser(patientData: UserGetRequestDto) {
        const x:number=patientData.slide
        return await this.db.find().limit( x)
    }
}