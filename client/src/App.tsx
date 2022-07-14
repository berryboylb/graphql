import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import Filter from "./components/filter"
import toast from 'react-hot-toast';
import "./App.css"

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      toast.error(`Graphql erorr ${message}`)
    })
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Toaster position="top-right" />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter/:item" element={<Filter />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
