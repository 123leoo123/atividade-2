import { booksDataBase } from "../database/database";
import { Ibooks } from "../interface/booksInterface";

export class booksServices {
    getBooks() {
        return booksDataBase;
    }

    getOneBook(id: string) {
        const findBook = booksDataBase.find(book => book.id === Number(id))

        return findBook;
    }

    createBook(data: Omit<Ibooks, "id">) {
        const newBook = { id: booksDataBase.length + 1, ...data }

        booksDataBase.push(newBook)

        return newBook;
    }

    deleteBook(id: string) {
        const index = booksDataBase.findIndex(book => book.id === Number(id))

        booksDataBase.splice(index, 1)
    }

    editBook(id: string, data: Partial<Omit<Ibooks, "id">>) {
        const book = booksDataBase.find(book => book.id === Number(id)) as Ibooks;

        const newBook = { ...book, ...data };

        const index = booksDataBase.findIndex(book => book.id === Number(id));

        booksDataBase.splice(index, 1, newBook);

        return newBook;
    }
}