import React from "react";
import DropDownNav from "./DropDownNav"

import Auth from '../../auth'

function Navbar() {
  // const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  // const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const links = [
    { href: "/", label: "Home"},
    { href: "/tasks", label: "Tasks" },
    { href: "/donate", label: "Donate" },
    { href: "/login", label: "Login" },
  ];

  function logoutButton () {
    Auth.logout()
  }

  return (
    <nav className="nav">
      <button className="nav-button">Task-A-Saurus</button>
      <DropDownNav links={links}/>
      <ul className="nav-list">
        {links.map((link) => (
          <li className="nav-item" key={link.href}>
            {Auth.loggedIn() && link.label === 'Login' ? <button className="logout-button" onClick={logoutButton}>Logout</button> : <a href={link.href}>{link.label}</a>}
          </li>
        ))}
      </ul>
    </nav>
  );

  // return (
  //   <nav className="navbar">
  //     <button className="navbar__button">My Website</button>
  //     <ul className={`navbar__list ${isMobileNavOpen ? 'navbar__list--open' : ''}`}>
  //       {links.map((link) => (
  //         <li key={link.href} className="navbar__list-item">
  //           <a href={link.href} className="navbar__link">{link.label}</a>
  //         </li>
  //       ))}
  //     </ul>
  //     <button className="navbar__hamburger" onClick={toggleMobileNav}>☰</button>
  //   </nav>
  // );
}

export default Navbar;
