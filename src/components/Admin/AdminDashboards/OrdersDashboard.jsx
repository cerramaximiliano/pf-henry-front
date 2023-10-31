import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Loader from "../../Loader/Loader";
import { FiltersContext } from "../../../context/filter";
import { getAllOrders } from "../../../redux/Orders/orderActions";


export default function OrdersDashboard() {
  const { orders, currentPage, totalPages } = useSelector((state) => state.orders);
  const [isLoading, setIsLoading] = useState(false)
  const { filters } = useContext(FiltersContext);
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAllOrders({ ...filters })).then(() => { setIsLoading(false) })
    console.log('orders: ');
    console.log(orders);
  }, [filters])


  return (
    <>
      {isLoading ? <Loader /> : <div className="sticky z-10 mt-[20px] bg-whiteFred ">
        <table>
          <thead>
            <tr>
              <th className="bg-graym text-blackFred-100 py-[20px] px-[80px]">Order Id</th>
              <th className="bg-graym text-blackFred-100 py-[20px] px-[80px]">Products</th>
              <th className="bg-graym text-blackFred-100 py-[20px] px-[80px]">Status</th>
              <th className="bg-graym text-blackFred-100 py-[20px] px-[80px]">Total</th>
              <th className="bg-graym text-blackFred-100 py-[20px] px-[80px]">UserId</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => (
                <tr key={order._id}>
                  <td className="bg-graym text-blackFred-100">{order._id}</td>
                  <td className="bg-graym text-blackFred-100">{order.products.map((p, i) => <span key={i}>{p.title}</span>)}</td>
                  <td className="bg-graym text-blackFred-100">{order.status}</td>
                  <td className="bg-graym text-blackFred-100">{order.total}</td>
                  <td className="bg-graym text-blackFred-100">{order.userId}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Paginated currentPage={currentPage} totalPages={totalPages} />
      </div>}
    </>
  )
}