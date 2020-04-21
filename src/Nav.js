import React from 'react';
import { ReactComponent as BellIcon } from './assets/bell-regular.svg';
import { ReactComponent as PlusIcon } from './assets/plus-solid.svg';
import { ReactComponent as DownIcon } from './assets/caret-down-solid.svg';
import { ReactComponent as BlocksIcon } from './assets/th-solid.svg';

import { NavItem } from './NavItem';
import { DropdownMenu } from './DropdownMenu';

export const Nav = () => {
  return (
    <nav className="nav">
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<BlocksIcon />} />
      <NavItem icon={<DownIcon />}>
        <DropdownMenu />
      </NavItem>
    </nav>
  );
};
