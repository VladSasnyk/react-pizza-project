import classes from './Home.module.css'
import homeIcon from '../../assets/home.png'
import HomeMenu from './HomeMenu'

const Home = (props) => {
    return <section className={classes.home} id='Home'>
        <HomeMenu onShowCart={props.onShowCart} className={classes['home-menu']}/>
        <div className={classes.img}>
            <img src={homeIcon}
                alt='home img'
                height="100%"
                width='100%'
                >
            </img>
        </div>

    </section>
}

export default Home;