import React from 'react'

import { Link} from  'react-router-dom';
const Header = () =>{

    return(
                <header>

      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand  " href="#">React  Routing POC</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
    
        <li > <Link to="/">Home</Link></li>
        <li><Link  to="/Post">Post</Link></li>
        <li>  <Link to="/Profile">Profile</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span></a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> </a></li>
      </ul>
    </div>
  </div>
</nav>
     </header>
       

    )
}

export default Header;