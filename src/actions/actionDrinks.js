import { requestAPIdrinks } from '../service/requestAPI';

export const REQUEST_API_DRINK = 'REQUEST_API_DRINK';
export const REQUEST_API_SUCESS_DRINK = 'REQUEST_API_SUCESS_DRINK';

export const requestDrinkAPIaction = () => ({
  type: REQUEST_API_DRINK,
});

export const requestDrinkApiSucess = (data) => ({
  type: REQUEST_API_SUCESS_DRINK,
  data,
});

export function fetchApiDrinks(searchBar, radio) {
  return (dispatch) => {
    dispatch(requestDrinkAPIaction());
    requestAPIdrinks(searchBar, radio).then((json) => dispatch(requestDrinkApiSucess(json)));
  };
}
