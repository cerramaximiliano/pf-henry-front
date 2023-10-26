import { useDispatch, useSelector } from "react-redux";
import SideBar from '../../components/Admin/SideBar/SideBar';
import { useContext, useEffect, useState } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";
import { FiltersContext } from "../../context/filter";
import Loader from "../../components/Loader/Loader";
import ProductDashboard from "../../components/Admin/AdminDashboards/ProductDashboard";
import UsersDashboard from "../../components/Admin/AdminDashboards/UsersDashboard";

export default function Products() {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { filters, setFilters } = useContext(FiltersContext);
  const [selectedMenu, setSelectedMenu] = useState('');
  const { products, currentPage, totalPages} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductFiltered({...filters, limit: 20})).then(() => {setIsLoading(false)})
    console.log(selectedMenu)
  }, [filters, selectedMenu])

  const renderComponentBasedOnMenu = () => {
    switch (selectedMenu) {
      case "Products":
        return <ProductDashboard />;
      case "Users":
        return <UsersDashboard />;
      default:
        return <ProductDashboard />;
    }
  };

  return (
    <div className="flex flex-row">
      <SideBar 
      selectedMenu={selectedMenu}
      setSelectedMenu={setSelectedMenu}/>
      <span className="w-[10%]" ></span>
      {isLoading 
      ?  <Loader/> 
      : renderComponentBasedOnMenu()}
    </div>
  );
}