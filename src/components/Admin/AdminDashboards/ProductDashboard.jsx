import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { deleteProduct } from "../../../redux/products/productsActions";
import { useEffect } from "react";


export default function ProductDashboard() {
    const { products, currentPage, totalPages} = useSelector(
        (state) => state.products
      );
    const dispatch = useDispatch()
    console.log(products);

    const deleteProductById = (productId) => {
      dispatch(deleteProduct(productId))
    }

   


    return (
        <>
            <div className="sticky z-10 mt-[20px] bg-[#121212] ">
            <table>
                <thead>
                    <tr>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Title</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Category</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Price</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Flavor</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Stock</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Sold</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Status</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Actions</th>
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
                              <td className="bg-graym text-whiteFred-100">{product.title}</td>
                              <td className="bg-graym text-whiteFred-100">{product.category}</td>
                              <td className="bg-graym text-whiteFred-100">${product.price}</td>
                              <td className="bg-graym text-whiteFred-100">{product.flavor}</td>
                              <td className="bg-graym text-whiteFred-100">{product.stock}</td>
                              <td className="bg-graym text-whiteFred-100">{product.sold}</td>
                              <td className="bg-graym text-whiteFred-100">{product.isActive ? 'Active' : 'Not Active'}</td>
                              <td className="bg-graym text-whiteFred-100">
                                <div>
                                  <button
                                    onClick={() => console.log('edit')}
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
                <Paginated/>
            </div>
        </>
    )
}