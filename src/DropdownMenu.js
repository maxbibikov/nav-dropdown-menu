import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as AngleRightIcon } from './assets/angle-right-solid.svg';
import { ReactComponent as AddressBookIcon } from './assets/address-book-regular.svg';
import { ReactComponent as CartPlusIcon } from './assets/cart-plus-solid.svg';
import { ReactComponent as CalendarIcon } from './assets/calendar-alt-regular.svg';

export const DropdownItem = ({ leftIcon, rightIcon, title, onClick }) => {
  return (
    <button className="dropdown-item" type="button" onClick={onClick}>
      <div className="dropdown-item__icon">{leftIcon}</div>
      <div className="dropdown-item__title">
        <h3>{title.toUpperCase()}</h3>
      </div>
      <div className="dropdown-item__icon">{rightIcon}</div>
    </button>
  );
};

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = React.useState('main');
  const [menuHeight, setMenuHeight] = React.useState(null);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const handleSettingsMenuClick = () => {
    setActiveMenu('settings');
  };
  return (
    <section
      className="dropdown-menu"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      {/* MAIN MENU */}
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AddressBookIcon />}
            title="Settings"
            rightIcon={<AngleRightIcon className="forward-icon" />}
            onClick={handleSettingsMenuClick}
          />
          <DropdownItem leftIcon={<CartPlusIcon />} title="Checkout" />
          <DropdownItem leftIcon={<CalendarIcon />} title="Calendar" />
        </div>
      </CSSTransition>

      {/* SETTINGS MENU */}
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AngleRightIcon className="back-icon" />}
            title="Back"
            onClick={() => setActiveMenu('main')}
          />
          <DropdownItem title="MENU 1" />
          <DropdownItem title="MENU 2" />
          <DropdownItem title="MENU 3" />
          <DropdownItem title="MENU 4" />
          <DropdownItem title="MENU 5" />
          <DropdownItem title="MENU 6" />
          <DropdownItem title="MENU 7" />
          <DropdownItem title="MENU 8" />
        </div>
      </CSSTransition>
    </section>
  );
};
