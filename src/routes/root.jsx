import { Outlet } from "react-router-dom";
import { useState } from "react";

import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { ShoppingCartContext } from "../components/ShoppingCartContext";

export default function Root() {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <section>
        <NavBar />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          React Shopping Cart!
        </h1>
        <div>
          <Outlet />
        </div>
        <Footer />
      </section>
    </ShoppingCartContext.Provider>
  );
}
