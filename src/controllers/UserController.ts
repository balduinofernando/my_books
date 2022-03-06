import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async index(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find({ order: { name: "ASC" } });

    return response.status(200).json({ users: users });
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userRepository = getCustomRepository(UserRepository);

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
