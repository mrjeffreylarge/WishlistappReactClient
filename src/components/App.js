import React from 'react';
import Routes from "./../Routes";
import Nav from "./Nav";
import { Link, withRouter } from "react-router-dom";
import styles from '../scss/App.scss';

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

    return (
      <div className={styles.app}>
        <Nav isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout}/>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
