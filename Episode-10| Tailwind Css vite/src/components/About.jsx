import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {

  constuctor(props) {
  //   // super(props)
  //   console.log("Parent constructor")
  }
  componentDidMount() {
    // console.log("Parent Did Mount")
  }

  render() {
    // console.log("Parent render")
    return (
      <div>
        About Us
        <User/>
        {/* <UserClass
          name="First component"
          location="Bangalore Class Based"
        /> */}
      </div>
    );
  }
}

export default About;
