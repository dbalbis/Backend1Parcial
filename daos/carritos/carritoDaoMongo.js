import ContenedorMongo from '../../contenedores/contenedorMongo.js';

class CartModel extends ContenedorMongo {
  constructor() {
    super('prodCart', {
      timestamp: { type: Number, require: true },
      productos: { type: Array, require: true },
      id: Number,
    });
  }
}

export default new CartModel();
