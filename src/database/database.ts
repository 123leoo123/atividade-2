import { Ibooks } from "../interface/booksInterface"

export const booksDataBase: Ibooks[] = [];

let id = 0;

export const generateId = () => {
    id++
    return id;
}