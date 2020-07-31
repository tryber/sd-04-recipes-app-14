const APIFOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

export const getFood = () =>
  fetch(APIFOOD).then((response) => response.json());
  