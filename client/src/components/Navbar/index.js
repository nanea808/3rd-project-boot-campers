import React from "react";
import Hamburger from "./Hamburger"

function Navbar() {
  // const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  // const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const links = [
    { href: "/tasks", label: "Tasks" },
    { href: "/donate", label: "Donate" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <button className="nav-button">Tasker App</button>
      <ul className="nav-list">
        {links.map((link) => (
          <li className="nav-item" key={link.href}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger />
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
