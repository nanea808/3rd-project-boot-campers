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
import About from "./pages/About";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers"

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: localStorage.getItem('id_token') || null,
//     }
//   }));

//   return forward(operation);
// });

//apollo
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  // link: concat(authMiddleware, httpLink),
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
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
           <Route path="/Developers" element={<Developers />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
