import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavbarWrapper = (props) => {
  return (
    <div className="nav-container">
      <Nav pills>
        <NavItem>
          <NavLink href="/" className="nav-branding" />
        </NavItem>
        <NavItem>
          <NavLink href="/" active>
            Dashboard
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

const MemoizedNavbar = React.memo(NavbarWrapper);
export default MemoizedNavbar;
