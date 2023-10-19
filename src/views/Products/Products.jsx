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
    <div className="flex flex-row mx-[5%] mt-[5%] min-h-[1000px] ">
      <Filtered />
      <span className="w-[30%]"></span>
      <Cards />
    </div>
  );
}