const { read, register, deleteDate } = require('./operaciones');
const args = process.argv.slice(2);
const action = args[0];

if (action === 'registrar') {
  const name = args[1] || '';
  const age = args[2] || '';
  const type = args[3] || '';
  const color = args[4] || '';
  const disease = args[5] || '';
  register(name, age, type, color, disease);
} else if (action === 'leer') {
  read();
} else if (action === 'eliminar') {
  const name = args[1] || '';
  deleteDate(name);
}
