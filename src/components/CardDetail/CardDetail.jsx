import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";
import ProductReviews from "../ProductReviews/ProductReviews"
import { NavLink } from "react-router-dom"
import { resetReviews } from "../../redux/Reviews/reviewsSlice";
import { resetDetail } from "../../redux/products/productSlice"
import { addProductToCart } from "../../redux/Cart/cartActions";

export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDetail());
    dispatch(resetReviews());
    dispatch(getProductId(id));
  }, [id]);

  const { detail, loading } = useSelector((state) => state.products);
 
  const handleAddClick = () => {
    if (detail && detail.length === 1) {
      const product = detail[0];
      console.log(detail)
      const imageSrc = product.image;
      dispatch(
        addProductToCart({
          id: product._id,
          product: {
            imageSrc,
            imageAlt: product.title,
            href: `/Detail/${_id}`,
            title: product.title,
            price: product.price,
            stock: product.stock,
          },
        })
      );
    }
  }

  return (
    <div className="flex flex-col">
      <div className="grid my-[5%] justify-items-center justify-center">        
        {loading ? (
          <p>Loading...</p>
          ) : detail && detail.length === 1 ? (
            detail.map((product) => (
              <div className="flex place-items-center	  border border-gray-900 bg-graym" key={product.id}>
                {product.image ? (
                  <div className=" w-[418px] h-[253px] p-[25px] ">
                    <img
                      className=" h-[307px] rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border"
                      src={product.image}
                      srcSet={`${product.image} 352w, ${product.image} 832w, ${product.image} 1200w`}
                      alt="Product Image"
                      />
                  </div>
                ) : null}
                <div className="grid grid-cols-1 space-auto place-content-evenly text-start	  text-blackFred-300 p-[50px] items-start">
                  <h1 className="font-impact w-[300px] my-[10px]">{product.title}</h1>                  
                  <h2 className="font-bayon-bold text-[20px] w-[300px] my-[10px]">Flavor:    {product.flavor}</h2>
                  <h2 className="font-bayon-bold text-[20px] w-[300px] my-[10px]">Ammount:   {product.weight?.value} {product.weight?.type}</h2>
                  <h2 className="font-bayon-bold text-[20px] w-[300px] my-[10px]">Units available:   {product.stock}</h2>
                  <h1 className="font-impact w-[300px] my-[10px]">${product.price}</h1>
                  <button
                  onClick={handleAddClick}
                  className="rounded-sm bg-redFred-100 text-whiteFred-100 w-[200px] outline-none hover:text-orangeFred-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
            ) : (
          <p>No product data available.</p>
        )}
      </div>
        <NavLink to={`/createReview/${id}`}>
          <button>Add review</button>
        </NavLink>
       <ProductReviews/>
    </div>
  );
}
//?">"