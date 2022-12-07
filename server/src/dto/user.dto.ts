import IUser from '../interfaces/User';
export class UserCreateRequestDto {
    constructor(
        public readonly image: string | undefined,
        public readonly title: string | undefined,
        public readonly subTitle: string | undefined
    ) {}

    static from(body: Partial<UserCreateRequestDto>): UserCreateRequestDto {
        return new UserCreateRequestDto(body.image, body.title, body.subTitle);
    }

    static fromMany(users: IUser[]) {
        return users.map((user) => UserCreateRequestDto.from(user));
    }
}

export class UserGetRequestDto {
    constructor(
        public readonly slide: number,
      //  public readonly _id: string | undefined,
       
    ) {}

    static from(body: Partial<UserCreateRequestDto>): UserCreateRequestDto {
        return new UserCreateRequestDto(body.image, body.title, body.subTitle);
    }

}