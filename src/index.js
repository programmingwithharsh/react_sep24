import ReactDOM from 'react-dom/client'; // builtin module
import React from 'react';
import Main from './Main'; // Importing Main Class Component
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root')); // root id is defined inside index.html file

const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];
const message = "Programming with Harsh";

// Without JSX
const headerMessage = React.createElement("h1", {}, "Programming with Harsh"); // h1 -> Programming with Harsh
const nestedItem = React.createElement("ul",
  {},
  flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// With JSX, we can directly write HTML code in Js
const headerMessage2 = <h1>Programming with Harsh 2 + 2 = {2 + 2}</h1>
const nestedItem2 = <ul>
  {
    flowers.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  }
</ul>

const username = "Jitendra"; // string
const interests = ["Playing Cricket", "Watching Movies", "Playing with Kids"]; // array
const birth = { // object
  year: 2000,
  place: "Kanpur"
};
const mobile = "iPhone";

root.render(
  <ApolloProvider client={client}>
    <Main mobileProps={mobile} username={username} interests={interests} birth={birth} />
  </ApolloProvider>
);
