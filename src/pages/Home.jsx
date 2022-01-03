import React from "react";
import { useSelector, useDispatch } from "react-redux";


import { Header, Categories, SortPopup, PizzaCard, PizzaCardLoading } from '../components/index';
import { fetchPizzas } from '../redux/action/pizzas';

import { setCategory } from '../redux/action/filters';

const categoryNames = [
  'Мясные',
  'Вегатарианские',
  'Гриль',
  'Острые',
  'Закрытые'
];

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const items = useSelector(({ pizzas }) => pizzas.items);  

  const dispatch = useDispatch(); // С помощью этой переменной мы передаём данные в Redux
  
  React.useEffect(() => {
    dispatch(fetchPizzas()); 
  }, []);

  const onSelectCategory = React.useCallback((index) => { // useCallback - один раз выполняет функцию и сохраняет,
    dispatch(setCategory(index)); //  при этом больше не вызывает (это улучшает производительность приложения).
  }, []);

  return (
      <div className="container">
        <Header/>
        <div className="HomeContent">
          <h1 className="HomeContentTitle">Все пиццы:</h1>
          <div className="HomeMenu">
            <Categories
              onClickItem={ onSelectCategory } 
              items={ categoryNames }
            />
            <div className="PopupContainer">
              <SortPopup 
               items={ sortItems }
              />
            </div>
          </div>
          <div className="HomeCard">
            {isLoaded 
              ? items.map((obj) =>
                <PizzaCard 
                  key={obj.id}
                  isLoading={true} 
                  {...obj} // С помощью "...obj" мы перекидываем всю информацию, которая содержалась в массиве в компонент
                />)
              : Array(6).fill(<PizzaCardLoading/>)}
          </div>
          
        </div>
      </div>
  );
}

export default Home;