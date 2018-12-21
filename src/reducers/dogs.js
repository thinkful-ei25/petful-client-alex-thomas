import {
  FETCH_DOGS_SUCCESS, 
  FETCH_DOGS_ERROR, 
  FETCH_DOGS_REQUEST,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_ERROR,
  ADOPT_DOG_REQUEST
} from '../actions/dogs';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default function dogReducer(state=initialState, action){
  if(action.type === FETCH_DOGS_SUCCESS){
    return{
      ...state,
      loading: false,
      error: null,
      data: action.dogs
    }
  }

  else if(action.type === FETCH_DOGS_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error,
      data: null
    }
  }

  else if(action.type === FETCH_DOGS_REQUEST){
    return{
      ...state,
      loading: true
    }
  }

  else if(action.type === ADOPT_DOG_SUCCESS){
    return{
      ...state,
      loading: false
    }
  }

  else if(action.type === ADOPT_DOG_ERROR){
    return{
      ...state,
      loading:false,
      error: action.error,
      data: null
    }
  }

  else if(action.type === ADOPT_DOG_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  
  return state;
}