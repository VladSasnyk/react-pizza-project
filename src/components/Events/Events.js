import classes from './Events.module.css'
import EventsItem from './EventsItem';


const Events = () => {
    return <section className={classes.section} id='Events'>
        <div className={classes.events}>
            <EventsItem numberBg='1' link='https://www.youtube.com/' target='_blank'>HOW WE COOCKING</EventsItem>
            <EventsItem numberBg='2' link='https://www.twitter.com/' target='_blank'>OUR BLOG</EventsItem>
            <div >
                <h1>Events</h1>
                <p>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
            </div>
            <EventsItem numberBg='4' link='#Menu'>TWO PIZZA FOR 1 PRICE</EventsItem>
            <EventsItem numberBg='5' link='#Menu'>KITCHEN TOUR</EventsItem>
            <EventsItem numberBg='6' link='#Menu'>FREE COFFEE FOR 3 PIZZA</EventsItem>
            <EventsItem numberBg='7' link='https://instagram.com' target='_blank'>OUR INSTAGRAM</EventsItem>
            <EventsItem numberBg='8' link='#AboutUs' >WHY ARE YOU CHOOSE US?</EventsItem>
        </div>


    </section>
}

export default Events;