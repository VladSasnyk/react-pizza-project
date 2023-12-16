import classes from './FilterMenu.module.css'
import { useState } from 'react'

const filterList = [
    'Show All',
    'Meat',
    'Vegetarian',
    'SeaProducts',
    'Mushroom'
]

const FilterMenu = (props) => {
    const [activeItem, setActiveItem] = useState(0);
    const onItemClick = (index,item) => {
        setActiveItem(index);
        props.onChangeList(item);
      };
    
    return <ul className={classes.list}>
        {filterList.map((item, index) => (
            <li
                key={index}
                value={item}
                onClick={() => onItemClick(index,item)}
                className={activeItem === index ? classes.active : ''}
            >
                {item}
            </li>
        ))}
    </ul>
}

export default FilterMenu;