import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "partent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"), // for siblings in the same div we need to wrap them inside the array
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"), // for siblings in the same div we need to wrap them inside the array
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! from React",
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
