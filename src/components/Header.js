import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
      <div className="container-md">
        <Link className="navbar-brand" to={`/`}>
          ImageSquad
        </Link>
      </div>
    </nav>
  )
}

export default Header;