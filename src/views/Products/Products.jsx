import { useDispatch, useSelector } from "react-redux";
import Filtered from "../../components/Filtered/Filtered";
import { Cards } from "../../components/cards/cards";
import { useContext, useEffect, useState } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";
import { FiltersContext } from "../../context/filter";
import Loader from "../../components/Loader/Loader";
import Featured from "../../components/Featured/Featured";

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
      <span className="w-[2%]"></span>
      <Filtered/>
      {!isLoading && <Cards />}
      <Featured/>
      <span className="min-h-[900px]"></span>
    </div>
  );
  }  