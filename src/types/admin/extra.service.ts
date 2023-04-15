import { Types } from "mongoose";

export interface IExaraService {
    _id: Types.ObjectId,
    name: string,
    icon: string
} 

export interface IExaraServiceCreateUpdate {
    name: string,
    icon: string
} 