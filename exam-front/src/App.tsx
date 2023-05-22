import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Continents from "./pages/Continents";
import CountriesOfContinent from "./pages/CountriesOfContinent";
import CountryInfos from "./pages/CountryInfos";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";


const httpLink = new HttpLink({
  uri: "https://countries.nausicaa.wilders.dev/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="countries" element={<CountriesOfContinent />} />
          <Route path="country" element={<CountryInfos />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
