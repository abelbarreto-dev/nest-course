import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1702143701327 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            state_id INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            city_id INTEGER NOT NULL,
            name character varying NOT NULL,
            complement character varying,
            number INTEGER NOT NULL,
            cep character varying NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            FOREIGN KEY(state_id) REFERENCES public.states(id),
            FOREIGN KEY(city_id) REFERENCES public.cities(id),
            FOREIGN KEY(user_id) REFERENCES public.users(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table public.address");
  }
}
