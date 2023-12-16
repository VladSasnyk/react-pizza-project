import Modal from "../UI/Modal";
import classes from './Login.module.css';
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";
// import CartContext from "../../store/cart-context";



const Login = props => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.login.isLoggedIn);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            dispatch(loginActions.login());
        }
    });

    // const loginCtx = useContext(CartContext);
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 200);

        return () => {
            clearTimeout(identifier);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };
    async function submitHandler(event) {
        event.preventDefault();
        dispatch(loginActions.login());
        const user = {
            enteredEmail: enteredEmail,
            enteredPassword: enteredPassword
        }
        const response = await fetch('https://pizza-shop-da74a-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        console.log(data);
    };

    const logoutHandler = e => {
        dispatch(loginActions.logout());
    }



    return <Modal onClose={props.onClose}>

        {!loginStatus &&
            <>
            <form onSubmit={submitHandler} className={classes.login}>
                <div
                    className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
            </>
        }
        {loginStatus &&
            <div className={classes.login}>
                <p>You are logged in</p>
                <Button onClick={logoutHandler}>Logout</Button>
            </div>}

    </Modal>
}

export default Login;