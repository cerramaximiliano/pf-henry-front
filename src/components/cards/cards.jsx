import React, { useEffect } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../redux/products/productSlice";
import NotFound from "../notFound/notFound";
import { Paginated } from "../Paginated/Paginated";
import Loader from "../Loader/Loader";
export function Cards() {
  const { products, currentPage, totalPages, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(startLoading());

  //   setTimeout(() => {
  //     dispatch(stopLoading());
  //   }, 3000 );
  // }, [products, currentPage]);

  return (
    <div className="relative overflow-hidden w-auto h-auto mx-[auto]">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center flex-row flex-wrap w-[50vw] rigth-[10%] gap-[10px]">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                image={product.image ?? null}
                title={product.title}
                category={product.category}
                price={product.price}
                stock={product.stock}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      )}
      <Paginated />
    </div>
  );
}
