import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";

export default function CardDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getProductId(params.id));
    console.log(detail);
  }, [params.id]);


  return (
    <div className="flex items-center justify-center h-screen">
      <button className="relative ml-[-320px] mt-[-10px] rounded-none bg-orangeFred-300 py-[8px] px-[24px]  text-blackFred-300 outline-none hover:border-transparent"
      onClick={handleGoBack}>⇦back</button>
      {detail 
      ? ( <div className="flex gap-8 border border-gray-900" key={detail.id}>
            {detail.image 
            ? (<div className="flex items-center justify-center w-[218px] h-[253px] p-[50px] relative bg-cyan-800 rounded">
                <img
                  className="w-[245px] h-[307px] rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border border-cyan-800"
                  src={detail.image}
                  srcSet={`${detail.image} 352w, ${detail.image} 832w, ${detail.image} 1200w`}
                  alt="Product Image"
                />
              </div>
            ) : null}
            <div className="flex flex-col items-center justify-center">
              <p>Name: {detail.title}</p>
              <p>Category: {detail.category}</p>
              <p>Diet: {detail.diet}</p>
              <p>
                Weight: {detail.weight?.value} {detail.weight?.type}
              </p>
              <p>Price: {detail.price}</p>
            </div>
          </div>
        
      ) : (
        <p>No product data available.</p>
      )}
    </div>
  );
}
