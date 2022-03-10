import React from "react";
import CartContainer from "./components/cart/CartItems";
import Navbar from "./components/Navbar";
import Questions from "./components/FAQ/Questions";
function App() {
  return (
    <>
      <main className="app-container">
        <Navbar />
        <CartContainer />
        <Questions />
      </main>
    </>
  );
}

export default App;
