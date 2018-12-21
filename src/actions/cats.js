import { API_BASE_URL } from '../config';

// fetch cats
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const fetchCatsSuccess = (cats) => ({
  type: FETCH_CATS_SUCCESS,
  cats
});

export const FETCH_CATS_ERROR = 'FETCH_CATS_ERROR';
export const fetchCatsError = (error) => ({
  type: FETCH_CATS_ERROR,
  error
});

export const FETCH_CATS_REQUEST = 'FETCH_CATS_REQUEST';
export const fetchCatsRequest = () => ({
  type: FETCH_CATS_REQUEST
});

// adopt / delete cats
export const DELETE_CATS_SUCCESS = 'DELETE_CATS_SUCCESS';
export const deleteCatsSuccess = (cats) => ({
  type: DELETE_CATS_SUCCESS,
});

export const DELETE_CATS_ERROR = 'DELETE_CATS_ERROR';
export const deleteCatsError = (error) => ({
  type: DELETE_CATS_ERROR,
  error
});

export const DELETE_CATS_REQUEST = 'DELETE_CATS_REQUEST';
export const deleteCatsRequest = () => ({
  type: DELETE_CATS_REQUEST
});

export const fetchCats = () => dispatch => {
  dispatch(fetchCatsRequest());
  fetch(`${API_BASE_URL}/api/cats`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => dispatch(fetchCatsSuccess(data))
  .catch(error => dispatch(fetchCatsError(error)))
  );
};

export const adoptCat = () => dispatch => {
  dispatch(deleteCatsRequest());
  fetch(`${API_BASE_URL}/api/cats`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(() => dispatch(deleteCatsSuccess())
  .catch(error => dispatch(deleteCatsError(error)))
  );
};