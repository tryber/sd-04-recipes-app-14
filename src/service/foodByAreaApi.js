const getAreas = () =>
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then((data) =>
    data.json().then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

const getFoodByArea = (area) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then((data) =>
    data.json().then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

const getAllFoods = () =>
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((data) =>
    data.json().then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export { getAreas, getFoodByArea, getAllFoods };
