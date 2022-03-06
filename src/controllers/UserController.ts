import { Request, Response } from "express";

class UserController {
    async create(request: Request, response: Response) {
        const {name, email, password} = request.body;
        //console.log(body);
        return response.send();
    }
}

export{UserController};
