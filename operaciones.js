const fs = require('fs');
const read = () => {
  try {
    const dates = fs.readFileSync('citas.json', 'utf8');
    console.table(JSON.parse(dates));
  } catch {
    console.log('No existen citas registradas');
  }
};

const register = (name, age, animalType, animelaColor, disease) => {
  try {
    const dates = fs.readFileSync('citas.json', 'utf8');
    const dateJson = JSON.parse(dates);
    dateJson.push({ name, age, animalType, animelaColor, disease });
    fs.writeFileSync('citas.json', JSON.stringify(dateJson, null, 2));
  } catch {
    const date = {
      name,
      age,
      animalType,
      animelaColor,
      disease,
    };
    fs.writeFileSync('citas.json', JSON.stringify([date], null, 2));
  }
};

const deleteDate = (name) => {
  try {
    const dates = fs.readFileSync('citas.json', 'utf8');
    const dateJson = JSON.parse(dates);
    const findedIndex = dateJson.findIndex((e) => e.name === name);
    if (findedIndex >= 0) {
      dateJson.splice(findedIndex, 1);
      fs.writeFileSync('citas.json', JSON.stringify(dateJson, null, 2));
      console.log(`el paciente ${name} ha sido eliminado`);
    } else {
      console.log('El paciente no ha sido encontrado');
    }
  } catch {
    console.log('No existen citas registradas');
  }
};

module.exports = { read, register, deleteDate };
