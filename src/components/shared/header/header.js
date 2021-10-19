import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info w-100">
         <div className="container-sm d-flex align-items-center">
               <Link to="/" className="navbar-brand d-flex align-items-center " >
                  <img src="https://jerniiscaringncompanionship.com/wp-content/uploads/2021/08/Group-129-1.png" alt="" width="40" height="40" />
                  <p className= "px-2 mt-0 mb-0" >My To Do List</p>
               </Link>
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link to="/" className="nav-link" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/cadastro" className="nav-link">Cadastro</Link>
                  </li>
               </ul>
         </div>   
      </nav>

   )
}

export default Header