import { useDispatch, useSelector } from "react-redux";
import Filtered from "../../components/Filtered/Filtered";
import { Cards } from "../../components/Cards/cards";
import { useContext, useEffect, useState } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";
import { FiltersContext } from "../../context/filter";
import Loader from "../../components/Loader/Loader";

export default function Products() {

  const dispatch = useDispatch()
  const { filters } = useContext(FiltersContext)
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductFiltered(filters)).then(() => {setIsLoading(false)})
  }, [filters])

  return (
    <div className="flex flex-row">
      <Filtered />
      <span className="w-[20%]" ></span>
      {isLoading ? <Loader/> : <Cards />}
    </div>
  );
}