// import { allItems } from "./AllItems";
import FilterMenu from "./FilterMenu";
import classes from './AvailableItems.module.css'
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";



const AvailableItems = () => {
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null)


    useEffect(() => {

        const fetchItems = async () => {
            const response = await fetch('https://pizza-shop-da74a-default-rtdb.europe-west1.firebasedatabase.app/items.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const allItems = [];

            for (const key in data) {
                allItems.push({
                    id: key,
                    name: data[key].name,
                    filling: data[key].filling,
                    class: data[key].class,
                    price: data[key].price,
                    src: data[key].src
                })
            }
            setItems(allItems);
            setList(filter(allItems));
            setIsLoading(false);
        };

        fetchItems().catch((error) => {
            setIsLoading(false);
            setFetchError(error.message);
        })


    }, [])


    const filter = arr => {
        return arr.map((item) => (
        
            <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                src={item.src}
                filling={item.filling} />
        )
        )
    }



    const [list, setList] = useState();
    const updateList = (filt) => {
        if (filt === 'Show All') {
            setList(filter(items));
        }
        else {
            const newArr = items.filter(itm => itm.class === filt);
            setList(filter(newArr));
        }

    }

    return <>
        <FilterMenu onChangeList={updateList} />
        <ul
            className={classes.menuItems}>
            {fetchError && <p>{fetchError}</p>}
            {isLoading && <p>Loading...</p>}

            {list}
        </ul>
    </>
}

export default AvailableItems;