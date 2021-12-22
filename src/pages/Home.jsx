import React from "react";


import { Header, Categories, SortPopup, PizzaCard } from '../components/index';


function Home({ items }) {
    
  return (
      <div className="container">
        <Header/>
        <div className="HomeContent">
          <h1 className="HomeContentTitle">Все пиццы:</h1>
          <div className="HomeMenu">
            <Categories 
              items={[
                'Мясные',
                'Вегатарианские',
                'Гриль',
                'Острые',
                'Закрытые'
              ]}
            />
            <div className="PopupContainer">
              <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
          </div>
          <div className="HomeCard">
            {items.map((obj) => (
              <PizzaCard key={obj.id} {...obj}/> // С помощью "...obj" мы перекидываем всю информацию, которая содержалась в массиве в компонент
            ))}
          </div>
          
        </div>
      </div>
  );
}

export default Home;