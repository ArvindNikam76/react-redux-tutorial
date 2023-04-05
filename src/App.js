import "./App.css";
import Header from "./containers/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "2.75rem" }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route> 404 not found !</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
