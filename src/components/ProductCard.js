import React from "react";
import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
        key={product?.id}
      >
        <div className="h-52 w-52 mx-auto">
          <img src={product.thumbnail} />
        </div>
        <h1 className="font-bold text-center">{product.brand}</h1>
        <p className="text-center font-semibold mb-3">
          Rating:{product.rating}
        </p>
        <div className=" flex-1">
          <h6 className="text-center">{product.price} tk</h6>
        </div>
        <div className="flex gap-2 mt-5">
          <button className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold">
            Add to cart
          </button>
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
