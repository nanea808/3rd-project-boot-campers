import "./styles/App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TaskFeed from "./components/TaskFeed";
import Home from "./pages/Home";
import User from "./pages/User";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element= {<User />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
