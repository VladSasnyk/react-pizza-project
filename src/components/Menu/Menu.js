import AvailableItems from './AvailableItems';
import classes from './Menu.module.css'

const Menu = () =>{
    return <section className={classes.menu} id='Menu'>
        <h1 className={classes.title}>Menu</h1>
        <AvailableItems/>
    </section>
}

export default Menu;