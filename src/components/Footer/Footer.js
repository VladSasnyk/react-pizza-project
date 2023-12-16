import classes from './Footer.module.css'
import Logo from '../UI/logo'


const Footer = props => {
    return <footer className={classes.footer}>
        <div className={classes['footer-nav']}>
            <Logo />
            <ul className={classes.ul}>
                <li><a href='#Home' className={classes.main}>Home</a></li>
                <li onClick={props.onShowCart}>To Order</li>
                <li><a href='#AboutUs'>About us</a></li>
                <li><a href='#Events'>Events</a></li>
                <li><a href='#Menu'>Menu</a></li>
            </ul>
            <ul className={classes.ul}>
                <li><a href='#Events' className={classes.main}>Events</a></li>
                <li><a href='#Events'>3 Pizza 1 Free Coffee</a></li>
                <li><a href='#Events'>2 Pizza for 1 Price</a></li>
                <li><a href='#Events'>Kitchen Tour</a></li>
            </ul>
            <ul className={classes.ul}>
                <li><a href='#Menu' className={classes.main}>Menu</a></li>
                <li><a href='#Menu'>Show All</a></li>
                <li><a href='#Menu'>Meat</a></li>
                <li><a href='#Menu'>Sea products</a></li>
                <li><a href='#Menu'>Vegan</a></li>
                <li><a href='#Menu'>Mushroom</a></li>
            </ul>
            <ul className={classes.ul}>
                <li><a href='#AboutUs' className={classes.main}>About Us</a></li>
                <li><a href='#AboutUs'>Our History</a></li>
                <li><a href='#AboutUs'>Why We?</a></li>
            </ul>
            
        </div>
        <div className={classes['footer-contacts']}>
            <p className={classes.number}>+3806666666</p>
            <a href='https://www.instagram.com/' target='_blanc'><img src='/icons/instagram.png' alt='instagram' width='40rem' height='40rem'></img></a>
            <a href='https://twitter.com/' target='_blanc'><img src='/icons/twitter.png' alt='twitter' width='40rem' height='40rem'></img></a>
            <a href='https://www.facebook.com/' target='_blanc'><img src='/icons/facebook.png' alt='facebook' width='40rem' height='40rem'></img></a>
        </div>
    </footer>
}

export default Footer;