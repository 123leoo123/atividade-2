import { Request, Response } from "express";
import { booksServices } from "../services/booksServices";

export class booksControllers {
    getBooks(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        const response = booksServices.getBooks();

        return res.status(200).json(response)
    }

    getOneBook(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        const response = booksServices.getOneBook(req.params.id);

        return res.status(200).json(response)
    }

    createBook(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        const response = booksServices.createBook(req.body);

        return res.status(201).json(response);
    }

    deleteBook(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        BooksServices.deleteBook(req.params.id);

        return res.status(204).json();
    }

    editBook(req: Request, res: Response): Response {
        const BooksService = new booksServices();

        const response = booksServices.editBook(req.params.id, req.body);

        return res.status(200).json(response);
    }
}