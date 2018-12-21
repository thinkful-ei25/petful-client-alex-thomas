import {combineReducers} from 'redux';
import dogReducer from './dogs';
import catReducer from './cats';

const rootReducer = combineReducers({
  cats: catReducer,
  dogs: dogReducer
});

export default rootReducer;
