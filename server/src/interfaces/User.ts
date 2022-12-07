import { Document } from 'mongoose';

export default interface IUser extends Document {
    image: string;
    title: string;
    subTitle: string;
}