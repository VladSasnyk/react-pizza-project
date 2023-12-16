import { useState,useEffect } from "react";

import classes from './HeaderList.module.css'

const HeaderList = () => {
    //For Mobile 
    const [active, setActive] = useState(false);
    const navMenu = () => {
        setActive(!active);
    }
    let hamburgerClasses = `${classes.hamburger} ${active && classes.mobile}`
    let listClasses = `${classes.list} ${active && classes.mobile}`
    

    // Scroll check
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollDistance = window.scrollY;

            if (window.innerWidth > 768) {
                const sections = document.querySelectorAll('section');
                let newActiveIndex = activeSectionIndex;

                sections.forEach((el, i) => {
                    if (el.offsetTop - window.innerHeight / 2 <= scrollDistance) {
                        newActiveIndex = i;
                    }
                });

                setActiveSectionIndex(newActiveIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSectionIndex]);



    return <>
        <ul className={listClasses}>
            <li key={'header-home'} className={activeSectionIndex === 0 ? classes.active : ''} onClick={navMenu}><a href='#Home'>Home</a></li>
            <li key={'header-menu'} className={activeSectionIndex === 1 ? classes.active : ''} onClick={navMenu}><a href='#Menu'>Menu</a></li>
            <li key={'header-events'} className={activeSectionIndex === 2 ? classes.active  : ''} onClick={navMenu}><a href='#Events'>Events</a></li>
            <li key={'header-aboutUs'} className={activeSectionIndex === 3 ? classes.active  : ''} onClick={navMenu}><a href='#AboutUs'>About Us</a></li>
        </ul>

        <div className={hamburgerClasses} onClick={navMenu}>
            <span className={classes.nav}></span>
            <span className={classes.nav}></span>
            <span className={classes.nav}></span>
        </div>
    </>
}

export default HeaderList;