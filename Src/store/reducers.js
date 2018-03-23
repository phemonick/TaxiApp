import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/modules/home';

export const makeRootReducer = () => combineReducers({
    home
});

export default makeRootReducer;
