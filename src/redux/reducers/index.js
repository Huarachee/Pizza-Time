import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({ // Объединяет Reducers
    filters: filtersReducer, // "filters" - это свойство
    pizzas: pizzasReducer, // "pizzas" - это свойство
});

export default rootReducer;