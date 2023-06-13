import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <>
    
      <nav className="navbar bg-body-tertiary" >
        <div className="container-fluid nav1" >
          <Link style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'white', textDecoration: 'underline'}} to="/">User LIST</Link>
        </div>
      </nav>

      <nav className="navbar bg-body-tertiary" >
        <div className="container-fluid nav1" >
          <Link style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'white', textDecoration: 'underline' }}  to="/favorites">Favorite USERS</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
