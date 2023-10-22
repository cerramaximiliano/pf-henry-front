import { useDispatch, useSelector } from "react-redux"
import { Paginated } from "../../Paginated/Paginated";

import Row from '../Row/Row';

export default function NavBar({}) {
    const { products } = useSelector(
        (state) => state.products
    );

    return(
        <>
            <div className="sticky z-10 top-0 bg-[#121212] m-auto">
            <table>
                <thead>
                    <tr>
                    <th  className="bg-graym text-whiteFred-100">Title</th>
                    <th  className="bg-graym text-whiteFred-100">Category</th>
                    <th  className="bg-graym text-whiteFred-100">Price</th>
                    <th  className="bg-graym text-whiteFred-100">Flavor</th>
                    <th  className="bg-graym text-whiteFred-100">Stock</th>
                    <th  className="bg-graym text-whiteFred-100">Status</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id}>
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