import bag from '../../assets/bag.png'
import classes from './Bag.module.css'
import {useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
// import CartContext from '../../store/cart-context'

const Bag = props => {
    const [btnIsHighLighted, setBtnIsHighLighted] =  useState(false);
    // const cartCtx = useContext(CartContext);
    const cartItem = useSelector(state => state.cart);
    const numberOfCartItems = cartItem.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const { items} = cartItem;
    
    const btnClasses = `${classes.button} ${btnIsHighLighted ?classes.bump : ''}`;
    useEffect(()=>{
        if(items.length === 0 ){
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighLighted(false);
        },300)

        return () => {
            clearTimeout(timer);
        }
    },[items]);

    return <>
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <img
                    src={bag}
                    className={classes.bag}
                    alt='A bag'
                    width='40rem'
                    height="40rem"
                    onClick={props.onClick}>
                </img>
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>

    </>
}

export default Bag;