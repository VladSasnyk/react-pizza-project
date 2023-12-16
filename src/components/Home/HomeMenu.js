import classes from './HomeMenu.module.css';
import lighting from '../../assets/lighting.png';
import homeMenuImg from '../../assets/homeMenu.png'
import ButtonSwitcher from '../UI/ButtonSwitcher';


const HomeMenu = (props) => {
    return <div className={classes['home-menu']}>
        <h1 className={classes.title}>The Fastest Pizza
            <span>
                <img src={lighting} alt='lighting'>
                </img>
            </span>
            Delivery</h1>
        <p>We will deliver juicy pizza for your family in 30 minutes,
            if the courier is late - pizza is free!</p>
        <p>
            <img src={homeMenuImg} alt='home menu'></img>
        </p>
        <ButtonSwitcher
            onShowCart={props.onShowCart}
            leftButton={'To Order'}
            rightButton={'Pizza Menu'}
            id='menuButtonSwitcher'
            rightSrc='#Menu' />
    </div>
}

export default HomeMenu;