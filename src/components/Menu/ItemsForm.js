import { useRef, useState } from 'react'
import Button from '../UI/Button'
import classes from './ItemsForm.module.css'
import Input from '../UI/Input'


const ItemsForm = props => {
    
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const plusAmount = () =>{
        return amountInputRef.current.value >= 10 ? '' : amountInputRef.current.value ++;
    }
    const minusAmount = () =>{
        return amountInputRef.current.value <= 1 ? '' : amountInputRef.current.value --;
    }
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
        setAmountIsValid(true);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        Amount:
        <div className={classes.amountChange}>
            <button type='button'onClick={minusAmount}>−</button>
            <Input
                ref={amountInputRef}
                input={{
                    htmlFor: 'Amount',
                    label:'Amount',
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button type='button' onClick={plusAmount}>+</button>
        </div>
        <Button type='submit'>+ Add</Button>
        {!amountIsValid && <p>Please enter a valid amount(1-10)</p>}
    </form>
}
export default ItemsForm;