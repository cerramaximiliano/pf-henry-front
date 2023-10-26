import React from "react";
import { useParams } from "react-router-dom";
import OrderCard from "../OrderCard/OrderCard";

export default function Dashboard({orders, orderId, date, status}) {

    return (
            <div>
                <h1>MyAccount</h1>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div>
                        <p>Order</p>
                        <p>{orderId}</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>{date.slice(0,10)}</p>
                    </div>
                    <div>
                        <p>Status</p>
                        <p>{status.toUpperCase(0)}</p>
                    </div>
                </div>
                <div>
                    <p>Products</p>
                    {orders.map((order) => 
                    (
                        <OrderCard
                        key={order._id}
                        id={order._id}
                        image={order.image ?? null}
                        title={order.title}
                        price={order.price}
                    />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}