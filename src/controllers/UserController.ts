import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userRepository = getRepository(User);

    const emailExists = await userRepository.findOne({ email });

    if (emailExists) {
      return response
        .status(409)
        .json({ error: "The informed email has already been taken." });
    }

    const user = userRepository.create({ name, email, password });
    await userRepository.save(user);

    return response.json({ user });
  }
}

export { UserController };
