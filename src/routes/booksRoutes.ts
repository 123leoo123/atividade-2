import { Router } from "express";
import { isBookIdValid } from "../middlewares/isBooksValid.middlewares";
import { validateRequest } from "../middlewares/validateRequest.middleware";
import { createBookBodySchema, editBookBodySchema } from "../schemas/createBookBody.schemas";
import { booksControllers } from "../controllers/booksControllers";

export const booksRoutes = Router();

const BooksControllers = new booksControllers();

booksRoutes.get("/", BooksControllers.getBooks);

booksRoutes.get("/:id", isBookIdValid.execute, BooksControllers.getBooks);

booksRoutes.post("/", validateRequest.execute({ body: createBookBodySchema}), BooksControllers.createBook);

booksRoutes.delete("/:id", isBookIdValid.execute, BooksControllers.deleteBook);

booksRoutes.patch("/:id", isBookIdValid.execute, validateRequest.execute({body: editBookBodySchema}), BooksControllers.editBook);