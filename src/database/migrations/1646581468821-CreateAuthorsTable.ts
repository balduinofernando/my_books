import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAuthorsTable1646581468821 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "authors",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "pseudonym",
            type: "varchar",
            isNullable: true,
            isUnique: true,
          },
          {
            name: "birthdate",
            type: "date",
            isNullable: true,
          },
          {
            name: "cover",
            type: "varchar",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("authors");
  }
}
