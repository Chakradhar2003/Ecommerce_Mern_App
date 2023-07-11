
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Success from "./pages/Success";

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route path="/products/:category" element={user ? <Navigate to="/" /> : <ProductList />} />
        <Route path="/product/:id" element={user ? <Product /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={user ? <Success /> : <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  )

};

export default App;