import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './styles/main.scss'

import Home from './components/home';
import About from './components/about';
import Visit from './components/visit';
import Hours from './components/hours';
import Service from './components/service';
import Blog from './components/blog';

import { FaFacebookSquare, FaInstagramSquare, FaYelp, FaGooglePlusSquare } from 'react-icons/fa';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon="HOURS" />
        <NavItem icon="SERVICES" />
        <NavItem icon="BLOG" />
        <NavItem icon="GALLERY" />
        <div className="link-container">
          <div className="links">
            <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
          </div>
          <div className="links">
            <a href="https://www.facebook.com/"><FaInstagramSquare /></a>
          </div>
          <div className="links">
            <a href="https://www.facebook.com/"><FaGooglePlusSquare /></a>
          </div>
          <div className="links">
            <a href="https://www.facebook.com/"><FaYelp /></a>
          </div>
        </div>
        <BookAppointment book="BOOK APPOINTMENT" />
      </Navbar>

      <Home />
      <About />
      <Visit />
      <Hours />
      <Service />
      <Blog />
    </div>

  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function BookAppointment(props) {
  return (
    <a className="test" href="https://booksy.com/en-us/"><h2 className="heading">{props.book}</h2></a>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <h2>
        <a href="#" className="icon-button">
          {props.icon}
        </a>
      </h2>
      {props.children}
    </li>
  );
}

export default App;