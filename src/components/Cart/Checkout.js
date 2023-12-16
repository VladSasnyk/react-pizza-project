import classes from './Checkout.module.css';
import Button from '../UI/Button'
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';


const Checkout = props => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        phone: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const phoneInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPhoneIsValid = !isEmpty(enteredPhone);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            phone: enteredPhoneIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPhoneIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            phone: enteredPhone
        })
    };


    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
    }`;
    const phoneControlClasses = `${classes.control} ${
        formInputsValidity.phone ? '' : classes.invalid
    }`;

    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses} >
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' ref={nameInputRef}></input>
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}></input>
            {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={phoneControlClasses}>
            <label htmlFor='phone'>Phone number</label>
            <input type='text' id='phone' ref={phoneInputRef}></input>
            {!formInputsValidity.phone && <p>Please enter a valid phone!</p>}
        </div>
        <div className={classes.actions}>
            <Button className={classes.submit}>Confirm</Button>
            <Button type='button' onClick={props.onCancel}>Cancel</Button>
        </div>

    </form>
}

export default Checkout;