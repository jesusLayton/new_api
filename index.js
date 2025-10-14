// index.js
const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('👋 Hola, esta es mi primera API!');
});

// Ruta que devuelve usuarios (simulados)
const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
  { id: 3, nombre: 'María' }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
