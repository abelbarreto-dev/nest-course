import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1702143696188 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE cities (
            id SERIAL PRIMARY KEY,
            name VARCHAR(128) NOT NULL,
            state_id INTEGER NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            FOREIGN KEY(state_id) REFERENCES public.states(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table public.cities");
  }
}
