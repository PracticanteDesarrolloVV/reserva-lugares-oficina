// Se registra después de todas las rutas. Mantiene el formato estándar de respuesta de error.
const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: 'El recurso solicitado no existe.' },
  });
};

module.exports = notFoundHandler;
