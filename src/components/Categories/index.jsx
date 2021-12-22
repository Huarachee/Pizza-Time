import React from 'react';



function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((categoriesPizza, index) => (
                    <li 
                        className={activeItem === index ? 'active' : ''} 
                        onClick={() => onSelectItem(index)} 
                        key={`${categoriesPizza}_${index}`}
                    >{categoriesPizza}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories

