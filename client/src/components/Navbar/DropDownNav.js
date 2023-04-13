import { React, useState } from "react";
import Hamburger from "hamburger-react";

function DropDownNav({links}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <ul className={isOpen ? 'nav-burger-open' : 'nav-burger-closed'}>
        {links.map((link) => (
          <li className="nav-item" key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownNav;
