const primeiraLetra = (event, input, radio, searchBar) => {
  if (radio === 'primeiraletra') {
    if (searchBar.length >= 1) alert('Sua busca deve conter somente 1 (um) caracter');
  }
  input(event);
};

export default primeiraLetra;
