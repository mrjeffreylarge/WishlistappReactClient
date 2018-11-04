import React from 'react';
import {Link} from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {this.props.isAuthenticated ?
          <React.Fragment>
          <li>
            <a onClick={this.props.handleLogout}>Logout</a>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          </React.Fragment>
          :
          <li>
            <Link to="/login">Login</Link>
          </li>
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
