import React from "react";
import { useParams } from "react-router-dom";
import OrderCard from "../OrderCard/OrderCard";

export default function Dashboard({orders}) {
    return (
        <div>
            <h1>MyAccount</h1>
            <div> 
                <div>Product ID</div>
            </div>
            <div>
                {orders.map((order) => 
                (
                    <OrderCard
                    key={order._id}
                    image={order.image ?? null}
                    title={order.title}
                    price={order.price}
                  />
                )
                )}
            </div>
            {
                console.log(orders)
                
            }
        </div>
    )
}