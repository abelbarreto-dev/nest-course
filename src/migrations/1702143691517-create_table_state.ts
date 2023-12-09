import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableState1702143691517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE states (
            id SERIAL PRIMARY KEY,
            name VARCHAR(128) NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table public.states");
  }
}
