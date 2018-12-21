import {API_BASE_URL} from '../config';

// fetch-dog sync
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const fetchDogsSuccess= (dogs) => ({
  type: FETCH_DOGS_SUCCESS,
  dogs
});

export const FETCH_DOGS_ERROR = 'FETCH_DOGS_ERROR';
export const fetchDogsError= (error) => ({
  type: FETCH_DOGS_ERROR,
  error
});

export const FETCH_DOGS_REQUEST = 'FETCH_DOGS_ERROR';
export const fetchDogsRequest= () => ({
  type: FETCH_DOGS_REQUEST
});

// adopt-dog sync

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = (error) => ({
  type: ADOPT_DOG_ERROR,
  error
});

export const ADOPT_DOG_REQUEST= 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_SUCCESS
})




// async actions
export const fetchDogs = () => {
  return(dispatch) => {
    dispatch(fetchDogsRequest());
    fetch(`${API_BASE_URL}/api/dog`, {
      method: 'GET',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(fetchDogsSuccess(data)))
    .catch(error => dispatch(fetchDogsError(error)))
  }
}

export const adoptDog = () => {
  return (dispatch) => {
    dispatch(adoptDogRequest());
    fetch(`${API_BASE_URL}/api/dogs`, {
      method: 'DELETE',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(()=> dispatch(adoptDogSuccess()))
    .catch(error => dispatch(adoptDogError(error)))
  }
}

