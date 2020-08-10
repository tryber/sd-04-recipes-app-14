const oneResultOrError = (data) => {
  if (data === null) {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
};

export default oneResultOrError;
