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
    const randomProducts = [...products];
    const randomDisplayedProducts = [];

    if (randomProducts.length <= count) {
      return randomProducts;
    }

    while (randomDisplayedProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * randomProducts.length);
      const randomProduct = randomProducts.splice(randomIndex, 1)[0];
      randomDisplayedProducts.push(randomProduct);
    }

    return randomDisplayedProducts;
  };

  const displayedProducts2 = getRandomProducts(2);



  return (
    <>
      
      <div
        className={`sm:flex xl:flex-column sxl:flex-column l:flex-column  relative  shadow-md px-10 text-blackFred-100 py-20 bg-graym right-5 mt-[50px] font-bayon-bold w-[250px] h-[700px] ${
          displayedProducts2.length > 0 ? "fall-and-bounce" : ""
        }`}
        style={{
          display: displayedProducts2.length > 0 ? "block" : "none",
        }}
      >
        <p className="font-bayon-bold text-[20px] -mt-10">Featured Products</p>
        {displayedProducts2.length > 0
          ? displayedProducts2.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                image={product.image ?? null}
                title={product.title}
                price={product.price}
              />
            ))
          : null}
      </div>
    </>
  );
}
