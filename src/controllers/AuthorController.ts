import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Author } from "../models/Author";

class AuthorController {
  async index(request: Request, response: Response) {
    const authorRepository = getRepository(Author);
    const authors = await authorRepository.find({ order: { name: "ASC" } });

    return response.status(200).json({ authors });
  }

  async store(request: Request, response: Response) {
    const { name, pseudonym, birthdate, cover } = request.body;

    const authorRepository = getRepository(Author);

    const authorExists = await authorRepository.findOne({ pseudonym });
    if (authorExists) {
      return response.status(409).json({
        error: "The informed pseudonym is already registered to someone",
      });
    }

    const author = authorRepository.create({
      name,
      pseudonym,
      birthdate,
      cover,
    });

    await authorRepository.save(author);

    return response.status(200).json({ author });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    
    const authorRepository = getRepository(Author);
    const author = await authorRepository.findOne({ id });
    
    return response.status(200).json({ author });
  }
}

export { AuthorController };
