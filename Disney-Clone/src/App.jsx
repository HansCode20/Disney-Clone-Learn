import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductHouse from "./components/ProductHouse";
import ProductList from "./components/ProductList";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductHouse />
      <ProductList />
      <MovieList/>
      <MovieCard/>
    </div>
  );
}

export default App;
