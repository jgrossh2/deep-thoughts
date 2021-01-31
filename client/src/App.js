import React from "react";
// use to provide data to all components
import { ApolloProvider } from "@apollo/react-hooks";
// use to get data when ready to use
import ApolloClient from "apollo-boost";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// establish new connection to graphql server using apollo
// need absolute path
const client = new ApolloClient({
  uri: "/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
