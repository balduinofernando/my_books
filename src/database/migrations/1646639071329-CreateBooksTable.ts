import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateBooksTable1646639071329 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "author_id",
            type: "varchar",
          },
          {
            name: "original_title",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "editor",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "edition",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "year",
            type: "int",
            isNullable: true,
          },
          {
            name: "isbn",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cover",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "fk_author_books",
            columnNames: ["author_id"],
            referencedTableName: "authors",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books");
  }
}
