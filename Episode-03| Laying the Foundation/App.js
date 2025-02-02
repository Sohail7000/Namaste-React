import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpilted before it reaches to JS) => Parcel => Babel
// JSX =>React.createElement => ReactElement-JS object =>HTMLElement(render)
// element

const elem = <span> Hello from span</span>
const Title = () => (
  <h1 className="title" tabIndex={5}>
    {elem}
    <br/>
    Hello From JSX 🚀
  </h1>
);

// Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading"> Functional component</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
