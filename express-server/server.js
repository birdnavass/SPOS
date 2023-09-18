const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'productos',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Rutas para CRUD de productos
app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, result) => {
    if (err) {
      console.error('Error al obtener productos: ' + err);
      res.status(500).json({ error: 'Error al obtener productos' });
    } else {
      res.json(result);
    }
  });
});

app.post('/productos', (req, res) => {
  const {
    nombre,
    descripcion,
    existencias,
    caducidad,
    precio,
  } = req.body;

  const query = 'INSERT INTO productos (nombre, descripcion, existencias, caducidad, precio) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [nombre, descripcion, existencias, caducidad, precio], (err, result) => {
    if (err) {
      console.error('Error al agregar producto: ' + err);
      res.status(500).json({ error: 'Error al agregar producto' });
    } else {
      res.json({ message: 'Producto agregado con éxito' });
    }
  });
});

app.put('/productos/:id', (req, res) => {
  const {
    nombre,
    descripcion,
    existencias,
    caducidad,
    precio,
  } = req.body;
  const productId = req.params.id;

  const query = 'UPDATE productos SET nombre=?, descripcion=?, existencias=?, caducidad=?, precio=? WHERE id=?';

  db.query(query, [nombre, descripcion, existencias, caducidad, precio, productId], (err, result) => {
    if (err) {
      console.error('Error al actualizar producto: ' + err);
      res.status(500).json({ error: 'Error al actualizar producto' });
    } else {
      res.json({ message: 'Producto actualizado con éxito' });
    }
  });
});

app.delete('/productos/:id', (req, res) => {
  const productId = req.params.id;

  const query = 'DELETE FROM productos WHERE id=?';

  db.query(query, [productId], (err, result) => {
    if (err) {
      console.error('Error al eliminar producto: ' + err);
      res.status(500).json({ error: 'Error al eliminar producto' });
    } else {
      res.json({ message: 'Producto eliminado con éxito' });
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
