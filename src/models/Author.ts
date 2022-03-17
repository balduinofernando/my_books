import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("authors")
class Author {
  @PrimaryColumn()
  readonly id: number;

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
      this.id = this.id;
    }
  }
}

export { Author };
