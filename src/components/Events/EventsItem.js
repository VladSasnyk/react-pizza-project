import classes from './EventsItem.module.css'
import Button from '../UI/Button'

const EventsItem = props => {

    return <div className={classes.item}
        style={{ background: `url(/events/events${props.numberBg}.png) no-repeat`, backgroundSize: `cover` }}>
        {props.children}
        {/* <Button ><a href={props.link} target='_blank' rel='noreferrer'>More</a></Button> */}
        <a href={props.link} target={props.target} rel='noreferrer'><Button>More</Button></a>
    </div>
}



export default EventsItem;