import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {

    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'));
    myHeaders.append('Accept', 'application/json');
    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    var myRequest = new Request('http://homestead.test/api/users', myInit);

    fetch(myRequest)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {users.map(user => (
            <li key={user.name}>
              {user.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default UserList;
