import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { deleteProduct, getProductFiltered } from "../../../redux/products/productsActions";
import { useEffect, useContext, useState } from "react";
import { FiltersContext } from "../../../context/filter";
import Loader from "../../Loader/Loader";
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from "react-router-dom";


export default function ProductDashboard() {
  const { products, currentPage, totalPages } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false)
  const { filters, setFilters } = useContext(FiltersContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(products);


  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductFiltered({ ...filters, limit: 20 })).then(() => { setIsLoading(false) })
  }, [filters])


  const deleteProductById = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      iconColor: '#d33',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(productId))
          .then(() => {
            setIsLoading(true)
            dispatch(getProductFiltered({ ...filters, limit: 20 })).then(() => { setIsLoading(false) })
          })
          .catch((error) => {
            console.error("Error al eliminar el producto: ", error);
          });
      }
    });
  };




  return (
    <>
      {isLoading ? <Loader /> : <div className="sticky z-10 mt-[20px] bg-[#121212] ">
        <table>
          <thead>
            <tr>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Title</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Category</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Price</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Flavor</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Stock</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Sold</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Status</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => (
                <tr key={product._id}>
                  {/* <td className="bg-graym text-whiteFred-100">
                                <img
                                  src={product.image}
                                  alt={product.title}
                                />
                              </td> */}
                  <td className="bg-graym text-whiteFred-100"><NavLink to={`/Detail/${product._id}`}>{product.title}</NavLink></td>
                  <td className="bg-graym text-whiteFred-100">{product.category}</td>
                  <td className="bg-graym text-whiteFred-100">${product.price}</td>
                  <td className="bg-graym text-whiteFred-100">{product.flavor}</td>
                  <td className="bg-graym text-whiteFred-100">{product.stock}</td>
                  <td className="bg-graym text-whiteFred-100">{product.sold}</td>
                  <td className="bg-graym text-whiteFred-100">{product.isActive ? 'Active' : 'Not Active'}</td>
                  <td className="bg-graym text-whiteFred-100">
                    <div>
                      <button
                        onClick={() => navigate(`/edit/${product._id}`)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProductById(product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
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