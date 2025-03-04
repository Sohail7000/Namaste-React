import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {

  constuctor(props) {
    super(props);
    console.log("Parent constructor")
  }

  render() {
    console.log("Parent render")
    return (
      <div>
        About Us
        {/* <User name = "Sohail (functional component)" /> */}
        <UserClass
          name="Sohail (class based component)"
          location="Bangalore Class Based"
        />
      </div>
    );
  }
}

export default About;
