import { Types } from "mongoose";

export interface IAmenities {
    _id: Types.ObjectId,
    name: string;
    icon: string
}

export interface IAmenitiesCreateUpdate {
    name: string,
    icon: string
}