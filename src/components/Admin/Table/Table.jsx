import { useDispatch, useSelector } from "react-redux"
import { Paginated } from "../../Paginated/Paginated";

import Row from '../Row/Row';

export default function NavBar({}) {
    const { products } = useSelector(
        (state) => state.products
    );

    return(
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
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Status</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id} >
                                <Row product={product.title}></Row>
                                <Row product={product.category}></Row>
                                <Row product={product.price}></Row>
                                <Row product={product.flavor}></Row>
                                <Row product={product.stock}></Row>
                                <Row product={product.status}></Row>
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