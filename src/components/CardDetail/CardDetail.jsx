import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";
import ProductReviews from "../ProductReviews/ProductReviews"
import { NavLink } from "react-router-dom"
import { resetReviews } from "../../redux/Reviews/reviewsSlice";
import {resetDetail } from "../../redux/products/productSlice"
export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDetail());
    dispatch(resetReviews());
    dispatch(getProductId(id));
  }, [id]);

  const { detail, loading } = useSelector((state) => state.products);

  return (
    <div className="grid my-[5%] justify-items-center justify-center  ">
      {loading ? (
        <p>Loading...</p>
      ) : detail && detail.length === 1 ? (
        detail.map((product) => (
          <div className="flex  border border-gray-900 bg-graym" key={product.id}>
            {product.image ? (
              <div className="flex items-center justify-center w-[218px] h-[253px] p-[50px] relative  rounded">
                <img
                  className="w-[245px] h-[307px] rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border "
                  src={product.image}
                  srcSet={`${product.image} 352w, ${product.image} 832w, ${product.image} 1200w`}
                  alt="Product Image"
                />
          </div>
            ) : null}
            <div className="grid grid-cols-1 space-auto place-content-evenly	  text-blackFred-300 p-[50px] items-start	">
              <span className="flex  ">
                <p className=" w-[200px] flex font-bayon-bold ">Name:</p>
                <p className="font-impact">{product.title}</p>
              </span>
              <span className="flex  ">                
                <p className=" w-[200px] flex font-bayon-bold">Category:</p>
                <p className="font-impact">{product.category}</p>
              </span>
              <span className="flex  ">                
                <p className=" w-[200px] flex font-bayon-bold">Diet:</p>
                <p className="font-impact">{product.diet}</p>
              </span>
              <span className="flex  ">                
                <p className=" w-[200px] flex font-bayon-bold">
                  Weight:</p>
                <p className="font-impact">
                  {product.weight?.value} {product.weight?.type}
                </p>
              </span>
              <span className="flex ">                
                <p className=" w-[200px] flex font-bayon-bold">Price: </p>
                <p className="font-impact">$ {product.price}</p>
              </span>
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
