import "./styles/App.css";
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import User from "./pages/User";
import LoginPage from "./pages/LoginPage";

const httpLink = new HttpLink({ uri: '/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('id_token') || null,
    }
  }));

  return forward(operation);
});

//apollo
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element= {<User />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
