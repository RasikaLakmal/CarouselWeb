import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/User';

const UserSchema: Schema = new Schema(
    {
        image: { type: String, required: true},
        title: { type: String, required: true , unique: true },
        subTitle: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);