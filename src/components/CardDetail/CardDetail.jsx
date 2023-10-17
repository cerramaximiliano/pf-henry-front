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
    <div>
      {detail.map((det) => {
        return (
          <div key={det.id}>
            <p>Name: {det.title}</p>
            <p>category: {det.category}</p>
            <p>diet: {det.diet}</p>
            <p>
              weight: {det?.weight?.value} {det?.weight?.type}
            </p>
            <p>price: {det.price}</p>
            <p></p>
            {det.image ? (
              <img
                src={det.image}
                srcSet={`${det.image} 352w, ${det.image} 832w, ${det.image} 1200w`}
                alt="Product Image"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
