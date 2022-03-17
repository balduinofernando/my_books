import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Book } from "../models/Book";

export class BooksController {
  async index(request: Request, response: Response) {
    const booksRepository = getRepository(Book);
    const books = booksRepository.find({ order: { title: "ASC" } });

    return response.status(200).json({ books });
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const booksRepository = await getRepository(Book);
    const book =await booksRepository.findOne({ id });

    return response.status(200).json({ book });
  }

  async store(request: Request, response: Response) {
    const {author_id,original_title,title,editor,edition,year,isbn,cover} = request.body;

    const booksRepository = await getRepository(Book);
    const book = await booksRepository.create({author_id, original_title, title,edition, editor,year, isbn, cover});
    await booksRepository.save(book);
    
    return response.status(200).json({book});
  }
  async update() {}
  async delete() {}
}
