/*
<div id="parent ">
  <div id="child">
    <h1>I am H1 tag</h1>
    <h2><I am H2 tag</h2>
  </div>
  </div>
</div>
*/
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React....!!!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const stuff = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"h1"},"I am H1 Tag"),React.createElement("h2",{id:"h2"},"I am H2 Tag")]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(stuff);
