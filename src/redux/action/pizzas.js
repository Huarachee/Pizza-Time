import axios from 'axios';


// Метод для сохранения и получения пицц.
export const fetchPizzas = () => dispatch => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => { // Когда данные с сервера будут получены то мы вызываем "dispatch"
      dispatch(setPizzas(data)); // И dispatch передаёт внутрь Redux
    });
};

// Метод для сохранения пицц.
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});