function CreateArray(data) {
  const arraySaida = [];
  const numberOfdata = data.length;
  for (let i = 0; i < 6; i += 1) {
    const mathRandom = Math.floor(Math.random() * numberOfdata);
    arraySaida.push(data[mathRandom]);
  }
  console.log(arraySaida);
  return arraySaida;
}

export default CreateArray;
