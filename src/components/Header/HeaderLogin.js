
import { useDispatch, useSelector } from "react-redux";
// import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Bag from "./Bag";
import classes from './HeaderLogin.module.css';
import { useEffect } from "react";
import { loginActions } from "../../store/login-slice";
// import { useContext } from "react";


const HeaderLogin = (props) => {
    // const loginCtx = useContext(CartContext);
    const dispatch = useDispatch();
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            dispatch(loginActions.login());
        }
    });
    
    const loginStatus = useSelector(state=> state.login.isLoggedIn);
    return <div className={classes.loginButton}>
        {!loginStatus && <Button
            name={'header-login'}
            id={classes['login']}
            onClick={props.onLogin}>Login</Button>}
        {loginStatus && 
        <>
        <p className={classes.welcome}>User</p>
        <Button
            name={'header-logout'}
            id={classes['logout']}
            onClick={props.onLogin}>Logout</Button>
        </>}

        <Bag onClick={props.onCart} />
    </div>

}

export default HeaderLogin;