import { UserCreateRequestDto,UserGetRequestDto } from '../dto/user.dto';
import { UserRepository } from '../repositories/userRepo';
import { UserService } from '../services/UserServices';
import { Request, Response,NextFunction } from 'express';
import bcryptjs from "bcryptjs";
import User from '../models/User';
import mongoose from 'mongoose';

const userService: UserService = new UserService(new UserRepository());

exports.postcarousel = async (req: Request, res: Response) => {
        const { image, title, subTitle } = req.body;

        const doc = new User({
            _id: new mongoose.Types.ObjectId(),
            image,
            title,
            subTitle,
        });
        
        let userCreateRequestDto: UserCreateRequestDto = new UserCreateRequestDto(doc.image, doc.title, doc.subTitle );

        const user =  userService.createUser(userCreateRequestDto);
        return user
        .then((user1) => {return res.status(201).json({
        user1
        });
})

};

exports.carousel = async (req: Request, res: Response) => {

    const slide = Number(req.params.slide);

    let userGetRequestDto: UserGetRequestDto = new UserGetRequestDto(slide);

    const user = await userService.GetUser(userGetRequestDto);
    console.log(user)
    res.status(201).json({
    user
});
};
