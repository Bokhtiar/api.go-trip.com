import { Types } from "mongoose";

export interface IComponent {
    _id: Types.ObjectId,
    name:string,
    icon?:string
}

export interface IComponentCreateUpdate {
    name:string,
    icon?:string
}