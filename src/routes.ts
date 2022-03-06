import { Router } from "express";
import { AuthorController } from "./controllers/AuthorController";
import { UserController } from "./controllers/UserController";
const route = Router();

route.get("/users", new UserController().index);
route.post("/users", new UserController().create);

// authors endpoints
route.get("/authors", new AuthorController().index);
route.post("/authors", new AuthorController().store);
route.get("/authors/:id", new AuthorController().show);
route.put("/authors/:id", new AuthorController().update);

export { route };
