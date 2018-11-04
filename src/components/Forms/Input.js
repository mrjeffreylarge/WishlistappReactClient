import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <input
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

export default Input;
