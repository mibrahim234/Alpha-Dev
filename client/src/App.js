import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

//retrieve the token from localStorage and include it with each request to the API
import { setContext } from "@apollo/client/link/context";

// Components and Pages
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Companies from "./pages/Companies";
import Developers from "./pages/Developers";

// establish a new link to the graphql server
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// (53)Because we're passing the client variable in as the value for the client prop in the provider,
// everything between the JSX tags will eventually have access to the server's API data through the client we set up.
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/companies" component={Companies} />
              <Route exact path="/developers" component={Developers} />

              <Route component={NoMatch} />
            </Switch>
         
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
