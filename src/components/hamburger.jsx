// HamburgerMenu.js
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      isOpen={isOpen}
      onStateChange={handleStateChange}
    >
      <a onClick={closeMenu} className="menu-item" href="/">
        Home
      </a>
      <a onClick={closeMenu} className="menu-item" href="/about">
        About
      </a>
      <a onClick={closeMenu} className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
