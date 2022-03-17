import { Router } from "express";
import { AuthorController } from "./controllers/AuthorController";
import { BooksController } from "./controllers/BooksController";
import { UserController } from "./controllers/UserController";
const route = Router();

route.get("/users", new UserController().index);
route.post("/users", new UserController().create);

// authors endpoints
route.get("/authors", new AuthorController().index);
route.post("/authors", new AuthorController().store);
route.get("/authors/:id", new AuthorController().show);
route.put("/authors/:id", new AuthorController().update);
route.delete("/authors/:id", new AuthorController().delete);

// books endpoints
route.get("/books", new BooksController().index);
route.post("/books", new BooksController().store);
route.get("/books/:id", new BooksController().show);
route.put("/books/:id", new BooksController().update);
route.delete("/books/:id", new BooksController().delete);

export { route };
