import { useDispatch, useSelector } from "react-redux";
import Filtered from "../../components/Filtered/Filtered";
import { Cards } from "../../components/cards/cards";
import { useEffect } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";

export default function Products() {

  const dispatch = useDispatch()
  const { products } = useSelector((state) => (state.products))

  useEffect(() => {
    if(!products.length){
      dispatch(getProductFiltered(''))
    }
  }, [])

  return (
    <div>
      <Filtered />
      <Cards />
    </div>
  );
}
