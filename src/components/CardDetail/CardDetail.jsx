import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";
import ProductReviews from "../ProductReviews/ProductReviews"
import { NavLink } from "react-router-dom"

export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id)

  useEffect(() => {
    dispatch(getProductId(id));
  }, [id]);

  const { detail, loading } = useSelector((state) => state.products);

  return (
    <div className="grid items-center justify-center h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : detail && detail.length === 1 ? (
        detail.map((product) => (
          <div className="flex gap-8 border border-gray-900" key={product.id}>
            {product.image ? (
              <div className="flex items-center justify-center w-[218px] h-[253px] p-[50px] relative bg-cyan-800 rounded">
                <img
                  className="w-[245px] h-[307px] rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border border-cyan-800"
                  src={product.image}
                  srcSet={`${product.image} 352w, ${product.image} 832w, ${product.image} 1200w`}
                  alt="Product Image"
                />
          </div>
            ) : null}
            <div className="flex flex-col items-center justify-center">
              <p>Name: {product.title}</p>
              <p>Category: {product.category}</p>
              <p>Diet: {product.diet}</p>
              <p>
                Weight: {product.weight?.value} {product.weight?.type}
              </p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No product data available.</p>
      )}
        <NavLink to={`/createReview/${id}`}>
          <button>Add review</button>
        </NavLink>
       <ProductReviews/>
    </div>
  );
}
