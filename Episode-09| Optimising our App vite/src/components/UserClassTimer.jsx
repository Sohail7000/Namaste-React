import React from "react";
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log("child constructor")

    this.state = {
      count: 0,
      timer: 0,
    };
  }

  timerIncrease = () => {
    this.setState({
      timer: this.state.timer + 1,
    });
  };

  componentDidMount() {
    this.intervalid = setInterval(this.timerIncrease, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalid);
  }

  render() {
    console.log("child render")
    const { name, location } = this.props;
    const { count, timer } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click me to increment
        </button>
        {<br />}
        {<br />}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Click me to decrement
        </button>
        <h3>Timer:{timer}</h3>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
