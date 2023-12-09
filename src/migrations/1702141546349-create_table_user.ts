import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1702141546349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(32),
            cpf VARCHAR(32) NOT NULL,
            password VARCHAR(255) NOT NULL,
            type_user INTEGER NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table public.users");
  }
}
