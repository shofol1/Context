import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const Home = () => {
  const {
    state: { products },
  } = useProduct();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products.map((product) => {
        return <ProductCard product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Home;
