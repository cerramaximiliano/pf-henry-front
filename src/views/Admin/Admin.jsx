import { useDispatch, useSelector } from "react-redux";
import Table from '../../components/Admin/Table/Table';
import SideBar from '../../components/Admin/SideBar/SideBar';
import { useContext, useEffect, useState } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";
import { FiltersContext } from "../../context/filter";
import Loader from "../../components/Loader/Loader";

export default function Products() {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { filters, setFilters } = useContext(FiltersContext);

  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductFiltered({...filters, limit: 20})).then(() => {setIsLoading(false)})
  }, [filters])

  return (
    <div className="flex flex-row">
      <SideBar 
      selectedMenu={selectedMenu}
      setSelectedMenu={setSelectedMenu}/>
      {isLoading 
      ?  <Loader/> 
      : <Table />}
    </div>
  );
}