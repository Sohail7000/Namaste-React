import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${props.name} constructor`);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        // avatar_url: "https://dummyphoto.com"
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/sohail7000");
    const json = await response.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(`component Did Mount`);
  }
  componentDidUpdate() {
    console.log(`component Did Update`);
  }
  componentWillUnmount() {
    console.log(`component Did UnMount`);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    console.log(`render`);
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Login: {login}</h3>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;
