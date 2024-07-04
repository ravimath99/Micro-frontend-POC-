import React from "react";
import ReactDOM from 'react-dom';
import Test from "./Test";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import "./index.css";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:7070/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <Test/>
    </div>
  </ApolloProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
