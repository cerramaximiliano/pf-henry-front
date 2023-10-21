import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../redux/products/productSlice"; // Importa la acción setCurrentPage
import NotFound from "../notFound/notFound";
import { Paginated } from "../../components/Paginated/Paginated";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export function Cards() {
  const { products, currentPage, totalPages, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());

  
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  }, [products, currentPage]);


  return (
    <div className=" overflow-hidden mx-[auto]">
      {isLoading ? <Loader/> : (
        <div className="flex items-center flex-row flex-wrap w-[70vw]  gap-[20px]">
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
      <Paginated />
    </div>
  );
}


export default withAuthenticationRequired(Card, {
 onRedirecting: () => <div>Loading...</div>, 
});