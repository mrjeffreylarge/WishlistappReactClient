import React from 'react';
import {Link} from "react-router-dom";
import NavItem from "./NavItem";
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <NavItem title="home" to="/"/>
          {this.props.isAuthenticated ?
          <React.Fragment>
          <NavItem title="Logout" onClick={this.props.handleLogout} />
          <NavItem title="User" to="/user"/>
          </React.Fragment>
          :
          <NavItem title="Login" to="/login"/>
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
