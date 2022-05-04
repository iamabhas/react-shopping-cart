import React from "react";
import CartContainer from "./components/cart/CartItems";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <main className="app-container">
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}

export default App;
