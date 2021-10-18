import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
         <div className="container-sm">
            <a className="navbar-brand" href="#">
               <img src="https://img.favpng.com/11/0/13/action-icon-png-favpng-D4VfVaT7EFYcBL7zgEjhQ7vhV.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
               My To Do List
            </a>
         </div>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Cadastro</a>
               </li>
            </ul>
         </div>
      </nav>

   )
}

export default Header