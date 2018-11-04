import React from 'react';
import {Link} from "react-router-dom";

class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item;

    if (this.props.to) {
      item = (
        <Link {...this.props} >
          {this.props.title}
        </Link>
      )
    }
    else {
      item = (
        <button onClick={this.props.onClick}>
          {this.props.title}
        </button>
      )
    }

    return (
      <li>{item}</li>
    );
  }
}

export default NavItem;
