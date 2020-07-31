const APIFOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const getFood = () => fetch(APIFOOD).then((response) => response.json());

export default getFood;
