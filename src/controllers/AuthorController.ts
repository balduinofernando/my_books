import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Author } from "../models/Author";

interface AuthorData {
  name: string;
  pseudonym: string;
  birthdate: string;
  cover: string;
}
class AuthorController {
  async index(request: Request, response: Response) {
    const authorRepository = getRepository(Author);
    const authors = await authorRepository.find({
      order: { pseudonym: "ASC" },
    });

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
    const author = await authorRepository.findOne({ where: { id: id } });

    return response.status(200).json({ author });
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, pseudonym, birthdate, cover } = request.body;

    const formData: AuthorData = request.body;

    const authorRepository = getRepository(Author);
    const author = await authorRepository.findOneOrFail({ where: { id: id } });

    author.name = name;
    author.pseudonym = pseudonym;
    author.birthdate = birthdate;
    author.cover = cover;

    await authorRepository.update({ id }, author);

    return response
      .status(200)
      .json({ message: "The author data has been updated", author });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const authorRepository = getRepository(Author);
    const author = await authorRepository.findOneOrFail({ where: { id: id } });

    await authorRepository.delete(author);

    return response
      .status(200)
      .json({ message: "The author has been deleted" });
  }
}

export { AuthorController };
