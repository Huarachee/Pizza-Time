import React from 'react';

function SortPopup({ items }) {
    // С помощью этой функции меняется переменная.
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const sortRef = React.useRef(null);
    const activeLabel = items[activeItem]; // При клике на выражение из выпадающего списка, записывается в span то, что мы выбрали

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    // Проверяет, происходит ли клик
    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) { // Через условие мы поняли, в какой области был произведён клик.
            setVisiblePopup(false); // И если он был произведен не по плашке "сортировка", то мы скрываем видимость выезжающего списка.
        }// Ссылка на этот блок будет храниться в переменной "sortRef"
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false);
    };

    React.useEffect(() => { // Если при клике произошёл рендер, зависимости при этом не изменились, то нужно вешать обработчик клилка на "body"
        document.body.addEventListener('click', handleOutsideClick); // И добавлять функцию "handleOutsideClick", которая будет проверять в нужной
    }, []);// ли области был произведён клик.

    return (
        <div className="sortContainer" ref={sortRef}>
            <div className="sort">
                <img src="/img/array-down.svg" alt="" width={40} height={40}/>
                <div className="sortText">
                    <b>Сортировка по:</b>
                    <span onClick={toggleVisiblePopup}>{ activeLabel }</span>
                </div>
            </div>
            {/* Если visiblePopup true то тогда будет отображаться список, если false, то список исчезнет*/}
            {visiblePopup && (<div className="sortPopup">
                <ul>
                    {items &&
                        items.map((name, index) => (
                            <li onClick={() => onSelectItem(index)} className={activeItem === index ? 'active' : ''} key={`${name}_${index}`}>
                                {name}
                            </li>
                        ))}
                </ul>
            </div>)}
        </div>
    );
}

export default SortPopup;
