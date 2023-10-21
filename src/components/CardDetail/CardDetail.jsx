import { useDispatch } from "react-redux";
import { getProductId } from "../../redux/products/productsActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductId(id));
  }, []);
  const { detail } = useSelector((state) => state.products);
  console.log(detail);

  /*  return (
    <div>
      <p>Name: {detail[0].title}</p>
      <p>category: {detail[0].category}</p>
      <p>diet: {detail[0].diet}</p>
      <p>weight: {detail[0].weight} </p>
      <p>price: {detail.price}</p>
      <p></p>
      <img
        src={detail.image}
        srcSet={`${detail.image} 352w, ${detail.image} 832w, ${detail.image} 1200w`}
        alt="Product Image"
      />
    </div>
  );
} */

  return (
    <div className="flex items-center justify-center h-screen ">
      {detail.map((det) => {
        return (
          <div className="flex gap-8 border border-gray-900" key={det.id}>
            {det.image ? (
              <div
                className=" flex items-center justify-center  w-[218px] h-[253px] p-[50px] relative bg-cyan-800 rounded  
              "
              >
                <img
                  className="  w-[245px] h-[307px] rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border border-cyan-800"
                  src={det.image}
                  srcSet={`${det.image} 352w, ${det.image} 832w, ${det.image} 1200w`}
                  alt="Product Image"
                />
              </div>
            ) : null}
            <div className=" flex flex-col items-center justify-center  ">
              <p>Name: {det.title}</p>
              <p>category: {det.category}</p>
              <p>diet: {det.diet}</p>
              <p>
                weight: {det?.weight?.value} {det?.weight?.type}
              </p>
              <p>price: {det.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
