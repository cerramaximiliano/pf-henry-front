import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";

export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductId(id));
  }, [id]);
  console.log(id)

  const { detail } = useSelector((state) => state.products);
  console.log(detail);

  return (
    <div className="flex items-center justify-center h-screen">
      {detail ? (
        <div className="flex gap-8 border border-gray-900" key={detail.id}>
          {detail.image ? (
            <div className="flex items-center justify-center w-[218px] h-[253px] p-[50px] relative bg-cyan-800 rounded">
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
            <p>category: {detail.category}</p>
            <p>diet: {detail.diet}</p>
            <p>
              weight: {detail.weight?.value} {detail.weight?.type}
            </p>
            <p>price: {detail.price}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

