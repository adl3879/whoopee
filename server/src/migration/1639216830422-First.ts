import {MigrationInterface, QueryRunner} from "typeorm";

export class First1639216830422 implements MigrationInterface {
    name = 'First1639216830422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "socials" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "socials" DROP COLUMN "created_at"`);
    }

}
