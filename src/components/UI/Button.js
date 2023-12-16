import classes from './Button.module.css'

const Button = props => {
    return <button
        className={classes.button}
        key={props.name}
        onClick={props.onClick}
        id={props.id}
        disabled={props.disabled}>
        {props.children}
    </button>
}

export default Button;