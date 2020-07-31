import { requestAPIfoods } from '../service/requestAPI';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';

export const requestAPIaction = () => ({
  type: REQUEST_API,
});

export const requestApiSucess = (data) => ({
  type: REQUEST_API_SUCESS,
  data,
});

export function fetchApi(searchBar, radio) {
  return (dispatch) => {
    dispatch(requestAPIaction());
    requestAPIfoods(searchBar, radio).then((json) => dispatch(requestApiSucess(json)));
  };
}
