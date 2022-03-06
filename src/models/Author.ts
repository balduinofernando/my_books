import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("authors")
class Author {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  pseudonym: string;

  @Column()
  cover: string;

  @Column()
  birthdate: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Author };
