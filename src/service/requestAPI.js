export function requestAPIfoods(query = '', radio) {
  if (radio === 'ingrediente') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`).then((data) =>
      data.json(),
    );
  }
  if (radio === 'nome') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then((data) =>
      data.json(),
    );
  }
  if (radio === 'primeiraletra') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`).then((data) =>
      data.json(),
    );
  }
  return null;
}

export function requestAPIdrinks(query = '', radio) {
  if (radio === 'ingrediente') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`).then((data) =>
      data.json(),
    );
  }
  if (radio === 'nome') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`).then((data) =>
      data.json(),
    );
  }
  if (radio === 'primeiraletra') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`).then((data) =>
      data.json(),
    );
  }
  return null;
}
