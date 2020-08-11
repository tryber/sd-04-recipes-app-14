const FoodOrDrinks = (searchBar, radio, requestAPIdrinks, requestAPIfoods) => {
  if (window.location.href.includes('bebidas')) {
    if (searchBar.length === 0 && radio === 'ingrediente') {
      return alert('Você deve digitar uma busca!');
    }
    return requestAPIdrinks(searchBar, radio);
  }
  if (window.location.href.includes('comidas')) return requestAPIfoods(searchBar, radio);
  return null;
};

export default FoodOrDrinks;
