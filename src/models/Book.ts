import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Author } from "./Author";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  author_id: string;

  @ManyToOne(() => Author)
  @JoinColumn({ name: "author_id" })
  author: Author;

  @Column()
  original_title: string;

  @Column()
  title: string;

  @Column()
  editor: string;

  @Column()
  edition: string;

  @Column()
  year: number;

  @Column()
  isbn: number;

  @Column()
  cover: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  /* constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  } */
}
