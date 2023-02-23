import mongoose, { Document, Model } from 'mongoose';
import { BaseModel } from '.';

export interface User extends BaseModel {
    _id?: string;
    name: string;
    email: string;
    password: string;
}

interface UserModel extends Omit<User, '_id'>, BaseModel, Document{}

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'E-mail must be unique'],
    },
    password: {type: String, required: true}
    },
    {
        toJSON: {
          transform: (_, ret): void => {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
          },
        },
      }
);

export const User: Model<UserModel> = mongoose.model('User', schema);