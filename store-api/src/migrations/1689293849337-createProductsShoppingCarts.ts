import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductsShoppingCarts1689293849337
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
     CREATE TABLE IF NOT EXISTS products_shopping_carts (
  id SERIAL PRIMARY KEY,
  product_id VARCHAR(24) NOT NULL,
  shopping_cart_id INTEGER NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (shopping_cart_id) REFERENCES shopping_carts (shopping_cart_id)
);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
     DROP TABLE IF EXISTS products_shopping_carts;
    `);
  }
}
