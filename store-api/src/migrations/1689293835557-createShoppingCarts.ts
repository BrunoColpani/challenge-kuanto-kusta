import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateShoppingCarts1689293835557 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
     CREATE TABLE IF NOT EXISTS shopping_carts (
  shopping_cart_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  total_price NUMERIC(10, 2) NOT NULL,
  total_quantity INTEGER NOT NULL,
  is_open boolean DEFAULT true NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
     DROP TABLE IF EXISTS shopping_carts;
    `);
  }
}
