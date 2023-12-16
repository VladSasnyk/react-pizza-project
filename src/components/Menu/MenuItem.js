
import classes from './MenuItem.module.css'
import ItemsForm from "./ItemsForm";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


const MenuItem = props => {
    const dispatch = useDispatch();

    const addToCartHandler = amount => {
        dispatch(cartActions.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }))
    }

    return < li
        className={classes.menuItem}
        id={props.id}
        key={props.id} >
        {/* <img  src={props.src}className={classes.menuItemImg} alt='item-img'></img> */}
        <img src={`${props.src}`} className={classes.menuItemImg} alt='item-img'></img>
        <div className={classes.menuItemName}>{props.name}</div>
        <div className={classes.price}>${props.price}</div>
        <div className={classes.menuItemFilling}>{props.filling}</div>
        <div>
            <ItemsForm onAddToCart={addToCartHandler} />
        </div>
    </li>;
}



export default MenuItem;