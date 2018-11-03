import React from 'react';
import Routes from "./../Routes";
import { Link, withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      isAuthenticated: false
    }
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    console.log(childProps);

    return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {this.state.isAuthenticated ?
            <React.Fragment>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
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
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
