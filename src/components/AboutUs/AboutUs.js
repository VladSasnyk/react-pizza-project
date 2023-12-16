import classes from './AboutUs.module.css'

const AboutUs = () => {
    return <section className={classes.section} id='AboutUs'>
        <div className={classes.menu}>
            <h1 className={classes.title}>About us</h1>
            <p className={classes.text}>In just a couple of years, we have opened 6 outlets in different cities:
                Kyiv, Lviv, Ivano-Frankivsk, Donetsk, Ternopil,
                and in the future we plan to develop the network in other major cities of Ukraine.</p>
            <img src='/aboutInfo.png' alt='about' className={classes.img}></img>
            <p className={classes.text}>The kitchen of each point is at least: 400-500 sq. m. meters,
             hundreds of employees, smoothly performing work in order to 
             receive / prepare / form / deliver customer orders on time.</p>    
        </div>
    </section>
}

export default AboutUs;