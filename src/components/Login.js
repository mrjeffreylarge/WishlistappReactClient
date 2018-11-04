import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from './Forms/Input';
import Button from './Forms/Button';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'admin@example.com',
      password: '',
      isLoading: false,
      error: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    console.log(event.target.id)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      isLoading: true,
      errors: []
    });

    var data = {
      'grant_type': 'password',
      'client_id': 2,
      'client_secret': process.env.REACT_APP_CLIENT_SECRET
    };

    data.username = this.state.username;
    data.password = this.state.password;

    var formData  = new FormData();

    for(var name in data) {
      formData.append(name, data[name]);
    }

    fetch('http://homestead.test/oauth/token', {
      method: 'post',
      body: formData
    })
    .then(res => res.json())
    .then((response) => {
      if (response.error) {
        this.setState({
          isLoading: false,
          error: response.message
        });
      }
      else {
        sessionStorage.setItem('access_token', response.access_token);
        this.props.userHasAuthenticated(true);
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            title="Username"
            placeholder="Username"
            value={this.state.username}
            handleChange={this.handleChange}
          />

          <Input
            type="password"
            name="password"
            title="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <Button
            title="Login"
            disabled={!this.validateForm() || this.state.isLoading}
          />

          {
            this.state.error &&
            <div>{this.state.error}</div>
          }

        </form>
      </div>
    );
  }
}

export default Login;
