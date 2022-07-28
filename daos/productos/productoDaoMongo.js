import ContenedorMongo from '../../contenedores/contenedorMongo.js';

class ProductsModel extends ContenedorMongo {
  constructor() {
    super('prodData', {
      timestamp: Number,
      nombre: { type: String, require: true },
      descripcion: String,
      codigo: String,
      foto: String,
      id: Number,
      precio: { type: Number, require: true },
      stock: { type: Number, require: true },
    });
  }
}

export default new ProductsModel();
