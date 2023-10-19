import React, { useEffect, useContext } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../redux/products/productSlice"; // Importa la acción setCurrentPage
import Loader from "../loader/loaer";
import NotFound from "../notFound/notFound";
import { FiltersContext } from "../../context/filter";

export function Cards() {
  const { products, currentPage, totalPages, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const { filters, setFilters } = useContext(FiltersContext)

  let elements = [];

  useEffect(() => {
    dispatch(startLoading());

    // Simula una carga asincrónica
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  }, [products, currentPage]);

  {
    for (let i = 0; i < Number(totalPages); i++) {
      elements.push(
        <button
          key={i}
          onClick={() => setFilters({...filters, page: i + 1})}
          className={i + 1 === currentPage ? "active" : ""}
        >
          {i + 1}
        </button>
      );
    }
  }

  return (
    <div className="mx-[auto]">
      {isLoading ? <Loader /> : (
        <div className="flex items-center flex-row flex-wrap w-[70vw]  gap-[100px]">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                image={product.image ?? null}
                title={product.title}
                category={product.category}
                price={product.price}
              />
            ))
          ) : (
            <NotFound/>
          )}
        </div>
      )}
      <div className="mt-[200px]">
        <input
          type="button"
          value="Prev"
          name="Prev"
          onClick={() => {
            setFilters({...filters, page: currentPage - 1});
          }}
          disabled={currentPage === 1}
        />

        {elements}

        <input
          type="button"
          value="Next"
          name="Next"
          onClick={() => {
            setFilters({...filters, page: currentPage + 1});
          }}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}