import React, { useState, useEffect } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsActions"; // Importa tus acciones
import { setCurrentPage } from "../../redux/products/productSlice"; // Importa la acción setCurrentPage

export function Cards() {
  const { products, currentPage, totalPages } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  let elements = [];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  {
    for (let i = 0; i < Number(totalPages); i++) {
      elements.push(
        <button
          key={i}
          onClick={() => dispatch(getProducts(i + 1))}
          className={i + 1 === currentPage ? "active" : ""}
        >
          {i + 1}
        </button>
      );
    }
  }

  return (
    <div>
    <div className="flex flex-row flex-wrap w-[1600px] mx-auto gap-6" >
      {products.map((product) => (
        <Card
          key={product._id}
          id={product._id}
          image={product.image ?? null}
          title={product.title}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
      <div className="mt-[200px]">
        <input
          type="button"
          value="Prev"
          name="Prev"
          onClick={() => {
            dispatch(getProducts(currentPage - 1));
          }}
          disabled={currentPage === 1}
        />

        {elements}

        <input
          type="button"
          value="Next"
          name="Next"
          onClick={() => {
            dispatch(getProducts(currentPage + 1));
          }}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}