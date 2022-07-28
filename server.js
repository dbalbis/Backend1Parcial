import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* Rutas */

app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);

//NO EXISTENCIA ROUTES
app.use((req, res, next) => {
  const err = new Error('Not found!');
  err.status = 404;
  next(err);
});

//ERRORES
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ error: { status: err.status || 500, message: err.message } });
});

/* Server */
app.listen(port, (err) => {
  if (err) {
    console.log(`Se produjo un error al iniciar el servidor: ${err}`);
  } else {
    console.log(`Servidor escuchando puerto: ${port}`);
  }
});
