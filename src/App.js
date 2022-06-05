import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function App() {
  const cards = data.map((items) => {
    return <Card item={items} />;
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
