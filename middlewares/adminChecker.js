export default (req, res, next) => {
  const rol = req.body.rol;
  if (rol == 'admin') {
    next();
  } else {
    res.status(401).send('No tienes permisos para acceder!');
  }
};
