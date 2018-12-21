import {
  FETCH_CATS_ERROR,
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  DELETE_CATS_ERROR,
  DELETE_CATS_REQUEST,
  DELETE_CATS_SUCCESS
} from '../actions/cats';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default function catReducer(state=initialState, action) {
  if(action.type === FETCH_CATS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      data: action.cats
    }
  } else if (action.type === FETCH_CATS_ERROR) {
    return {
      ...state,
      loading: false, 
      error: action.error,
      data: null
    }
  } else if (action.type === FETCH_CATS_REQUEST) {
    return {
      ...state,
      loading: true,
    }
  } else if (action.type === DELETE_CATS_REQUEST) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === DELETE_CATS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error,
      data: null
    }
  } else if (action.type === DELETE_CATS_SUCCESS) {
    return {
      ...state,
      loading: false
    }
  }

  return state;
}