import { useDispatch, useSelector } from "react-redux";
import Filtered from "../../components/Filtered/Filtered";
import { Cards } from "../../components/cards/cards";
import { useContext, useEffect, useState } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";
import { FiltersContext } from "../../context/filter";

export default function Products() {

  const dispatch = useDispatch()
  const { filters } = useContext(FiltersContext)
  

  useEffect(() => {
    dispatch(getProductFiltered(filters))
  }, [filters])

  return (
    <div className="flex flex-row mx-[5%] mt-[5%]">
      <Filtered />
      <span className="w-[10%]"></span>
      <Cards />
    </div>
  );
}