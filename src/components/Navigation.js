import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = "navigation">
            {/* permet de creer des ancres, comme les balise a  */}
            <NavLink exact to ="/" activeClassName = "nav_active">Acceuil</NavLink>
            <NavLink exact to ="/about" activeClassName = "nav_active">About</NavLink>
        </div>
    );
};

export default Navigation;