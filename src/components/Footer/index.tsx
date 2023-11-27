import React from "react";
import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from "pages/MainPage";
import logo from 'assets/images/Logo.svg';

import './styles.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <NavLink 
                    to={routeMainPage()}
                    className={({ isActive }) => isActive ? 'linkActive' : 'inactive'}
                    >
                    <img src={logo} alt={logo}/>
                </NavLink>
                <span>Дипломный проект</span>
                <div>
                    <span>Made by</span>
                    <span>Denis Churkin</span>
                </div>
            </div>
        </footer>
    )
}