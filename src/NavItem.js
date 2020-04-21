import React from 'react';

export const NavItem = ({ icon, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="nav-item">
      <button className="icon-btn" onClick={() => setOpen(!open)}>
        {icon}
      </button>
      {open && children}
    </div>
  );
};
