import { Friend } from './friend';

export interface Person{
    id?: string;
    isActive: boolean;
    balance?: string;
    picture?: string;
    age: number;
    eyeColor?: string;
    name: string;
    gender: string;
    company?: string;
    email?: string;
    phone?: string;
    about: string;
    registered?: string;
    latitude?: number;
    longitude?: number;
    tags?: string[];
    friends?: Friend[];
}
