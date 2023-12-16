import React from 'react';
import classes from './Header.module.css'
import Logo from '../UI/logo';
import HeaderList from './HeaderList';
import HeaderLogin from './HeaderLogin';


const Header = (props) => {

    return <header className={classes.header}>
        <Logo />
        <HeaderList className={classes['header-menu']} />
        <HeaderLogin
            onCart={props.onShowCart}
            onLogin={props.onShowLogin} />
    </header>
}

export default Header;