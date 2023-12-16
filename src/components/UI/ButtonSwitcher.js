import React, { useState } from 'react';
import classes from './ButtonSwitcher.module.css';
import Button from './Button';

const ButtonSwitcher = props => {
    const [switcher, setSwitcher] = useState(true);
    const switcherLeft = () => {
        setSwitcher(true);
        props.onShowCart();
    }
    const switcherRight = () => {
        setSwitcher(false);
    }

    let switcherClasses = `${classes.switch} ${switcher && classes.left} ${!switcher && classes.right}`


    return <div className={classes.basis}>
        <a className={classes.link}href={props.leftSrc}>
            <Button
                name='switcher-left'
                onClick={switcherLeft}>
                {props.leftButton}</Button>
        </a>
        <a className={classes.link} href={props.rightSrc}>
            <Button
                name='switcher-right'
                onClick={switcherRight}>
                {props.rightButton}</Button>
        </a>
        <span className={switcherClasses}></span>
    </div>
}

export default ButtonSwitcher;