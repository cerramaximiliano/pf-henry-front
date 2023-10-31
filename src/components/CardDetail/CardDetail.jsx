import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";
import ProductReviews from "../ProductReviews/ProductReviews"
import { NavLink } from "react-router-dom"
import { resetReviews } from "../../redux/Reviews/reviewsSlice";
import { resetDetail } from "../../redux/products/productSlice"
import { addProductToCart } from "../../redux/Cart/cartActions";
import Rating from '@mui/material/Rating';
import logo from "../../assets/logo(2).png"
export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [averageRating, setAverageRating] = useState(5);

  useEffect(() => {
    dispatch(resetDetail());
    dispatch(resetReviews());
    dispatch(getProductId(id));
  }, [id]);
  
  const { detail, loading } = useSelector((state) => state.products);
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      const newAverageRating = totalRating / reviews.length;
      setAverageRating(newAverageRating);
    }
  }, [reviews]);
  console.log(detail)
  
  const handleAddClick = () => {
    if (detail) {
      const product = detail;
      console.log(product)
      const imageSrc = product.image;
      dispatch(
        addProductToCart({
          id: product._id,
          product: {
            imageSrc,
            imageAlt: product.title,
            href: `/Detail/${id}`,
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
          <p className=" font-impact text-black">Loading...</p>
          ) : detail ? (                           
              <div className="flex place-items-center	  border border-gray-900 bg-graym" >
                {detail.image ? (
                  <div className=" w-[418px] h-[425px] p-[25px] ">
                    <img
                      className=" h-[400px] rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border"
                      src={detail.image}
                      srcSet={`${detail.image} 352w, ${detail.image} 832w, ${detail.image} 1200w`}
                      alt="Product Image"
                      />
                  </div>
                ) : null}
                <div>
                  <div className=" flex items-center justify-center">
                    <img src={logo} alt="" className=" h-[40px] mr-[10px]"/>
                    <h6 className=" font-bayon-bold text-blackFred-100 text-[25px] ml-[10px] my-0">GENSHY</h6>
                  </div>
                  <div className="grid grid-cols-1 space-auto place-content-evenly text-start	  text-blackFred-300 p-[50px] items-start">  
                    <div className=" flex">
                      <h1 className="font-impact w-[360px] text-[2rem] my-[10px]">{detail.title}</h1>
                      <div className=" flex flex-wrap content-center	">
                      <Rating name="read-only" value={averageRating} readOnly />                 
                      </div>
                    </div>                
                    <h2 className="font-bayon-bold text-[20px] w-[560px] my-[10px]">Flavor:    {detail.flavor}</h2>
                    <div className="flex">                      
                      <h2 className="font-bayon-bold text-[20px] w-[335px] my-[10px]">Ammount:   {detail.weight?.value} {detail.weight?.type}</h2>
                      <h2 className="font-bayon-bold text-[20px] w-[185px] my-[10px]">Units available:   {detail.stock}</h2>
                    </div>
                    <div className="flex"> 
                      <h1 className="font-impact w-[320px] my-[10px]">${detail.price}</h1>
                      <button
                      onClick={handleAddClick}
                      className="rounded-sm bg-redFred-100 text-whiteFred-100 w-[200px] outline-none hover:text-orangeFred-100"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
            ) : (
          <p>No product data available.</p>
        )}
      </div>       
       <ProductReviews/>
    </div>
  );
}
//?">"