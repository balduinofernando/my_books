import { Router } from "express";
import { UserController } from "./controllers/UserController";
const route = Router();

const userController = new UserController();

route.post("/users", userController.create);

export { route };
// API Routes
/* app.get("/books", (request: Request, response: Response) => {
    return response.json({
        message: "Página de listagem de todos os livros",
    });
});

app.get("/books/:id", (request: Request, response: Response) => {
    return response.json({ message: `Página de detalhes do livro: ${request.params.id}` });
});

app.post("/books", (request: Request, response: Response) => {
    return response.json({
        message: "Página para gravar novo livro",
    });
});

app.put("/books/:id", (request: Request, response: Response) => {
    return response.json({ message: `Página para atualizar um livro específico: ${request.params.id}` });
});

app.get("/authors", (req: Request, response: Response) => {
    return response.json({ message: "Página de listagem de autores" });
});

app.get("/editors", (req: Request, response: Response) => {
    return response.json({ message: "Página de listagem de livros" });
});

app.get("/lenders", (req: Request, response: Response) => {
    return response.json({ message: "Página de listagem de emprestadores de livros" });
});

app.get("/lenders/:id", (request: Request, response: Response) => {
    return response.json({ message: `Página de detalhes de emprestador: ${request.params.id}` });
});
app.get("/lenders/:id/books", (request: Request, response: Response) => {
    return response.json({ message: `Página de listagem livros que estão com o emprestador: ${request.params.id}` });
});

app.post('/users', (request, response)=>{
    return response.json({
        data: request.body
    });
}) */
