import React from 'react';
import ContentLoader from "react-content-loader";

function PizzaCardLoading() {
    // Анимация подгрузки информации с карточки
    return (
      <ContentLoader 
        speed={2}
        width={331}
        height={586}
        viewBox="0 0 331 586"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="161" cy="146" r="144" /> 
        <circle cx="292" cy="588" r="6" /> 
        <rect x="-1" y="305" rx="10" ry="10" width="330" height="30" /> 
        <rect x="83" y="484" rx="10" ry="10" width="163" height="55" /> 
        <rect x="84" y="548" rx="10" ry="10" width="163" height="35" /> 
        <rect x="28" y="350" rx="10" ry="10" width="270" height="55" /> 
        <rect x="29" y="417" rx="10" ry="10" width="269" height="55" />
      </ContentLoader>
    );
}

export default PizzaCardLoading;
