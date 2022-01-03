import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import styles from "./Card.module.scss";

import PizzaCardLoading from "./PizzaCardLoading";


function PizzaCard({ name, imageUrl, price, types, sizes, isLoading }) {
    const availableTypes = ['тонкое', 'классическое'];
    const availableSizes = [20, 28, 33];

    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0]);

    if (isLoading) {
        return <PizzaCardLoading/>
    }

    const onSelectType = (index) => {
        setActiveType(index);
    };

    const onSelectSize = (index) => {
        setActiveSize(index);
    }
    
    return (
        <div className="cardPizza">
            <img src={ imageUrl } alt="pizza" width={331} height={251}/>
            <h4 className="cardPizzaName">{ name }</h4>
            <div className="cardCriterionContainer">
                <div className="doughCriterionContainer">
                    <p className="doughCriterionTitle criterionTitle">Тесто:</p>

                    <ul className="listDoughCriterion listCriterion">
                        {availableTypes.map((type, index) => (
                            <li 
                            key={type}    
                            onClick={() => onSelectType(index)}
                            className={classNames({ // Если мы нажали на "li", то значит применяется определенный класс
                                activeItemPizza: activeType === index,
                                disabled: !types.includes(index),
                            })}>
                                {type}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sizeCriterionContainer">
                    <p className="sizeCriterionTitle criterionTitle">Размер:</p>

                    <ul className="listSizeCriterion listCriterion">
                        {availableSizes.map((size, index) => (
                            <li
                            key={size}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                activeItemPizza: activeSize === index, // Если есть размеры, записанных в бд, то мы применяем класс "activeItemPizza"
                                disabled: !sizes.includes(size), // Если нет размеров, записанных в бд, то мы применяем класс "disabled"
                            })}>
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="cardPizzaContainer">
                <span className="cardPizzaPrice">от {price} р.</span>
            </div>
            
        </div>
        
    );
}

PizzaCard.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
};

PizzaCard.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default PizzaCard;