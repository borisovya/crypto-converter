import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={s.navBar}>

            <div><NavLink to={'/'}>Currencies Chart</NavLink></div>
            <div><NavLink to={'/converter'}>Converter</NavLink></div>

        </div>
    );
};
