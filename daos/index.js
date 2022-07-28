import { config } from 'dotenv';
config();

const DATABASE = process.env.DATABASE;

let productsModel;
let cartModel;

switch (DATABASE) {
  case 'mongo':
    const { default: productsModelDaoMongo } = await import(
      './productos/productoDaoMongo.js'
    );
    const { default: cartModelDaoMongo } = await import(
      './carritos/carritoDaoMongo.js'
    );

    productsModel = productsModelDaoMongo;
    cartModel = cartModelDaoMongo;

    break;

  default:
    break;
}

export { productsModel, cartModel };
