import React, { useEffect } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../redux/products/productSlice";

export default function Featured() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);
  }, [products]);

  const getRandomProducts = (count) => {
    const randomProducts = [...products]; // Copia de todos los productos
    const randomDisplayedProducts = [];

    if (randomProducts.length <= count) {
      return randomProducts; // Si hay igual o menos productos que el count, devuélvelos todos
    }

    while (randomDisplayedProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * randomProducts.length);
      const randomProduct = randomProducts.splice(randomIndex, 1)[0];
      randomDisplayedProducts.push(randomProduct);
    }

    return randomDisplayedProducts;
  };

  const displayedProducts = getRandomProducts(2);
  return (
    <div
      className="absolute shadow-md px-10 text-blackFred-100 py-20 bg-graym right-0 top-0 mr-0 mt-4 font-impact w-300px h-[800px]"
      style={{
        display: displayedProducts.length > 0 ? "block" : "none",
      }}
    >
      <p>Featured Products</p>
      {displayedProducts.length > 0 ? (
        displayedProducts.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            image={product.image ?? null}
            title={product.title}
            price={product.price}
          />
        ))
      ) : null}
    </div>
  );
}
