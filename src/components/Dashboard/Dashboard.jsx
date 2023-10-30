import React from "react";
import { useParams } from "react-router-dom";
import OrderCard from "../OrderCard/OrderCard";

export default function Dashboard({orders, orderId, date, status}) {

    return (
            <div>
                <h2>My Account</h2>
                <div class="flex justify-end m-auto w-1/2">
                    <a class="text-blackFred-300 hover:text-orangeFred-300">View All</a>
                </div>
            <div className="flex justify-around w-1/2 m-auto rounded-sm bg-graym p-[20px]">
                <div className="flex flex-col justify-center">
                    <div>
                        <h4>Order Id</h4>
                        <p>{orderId}</p>
                    </div>
                    <div>
                        <h4>Date</h4>
                        <p>{date.slice(0,10)}</p>
                    </div>
                    <div>
                        <h4>Status</h4>
                        <p>{status.toUpperCase(0)}</p>
                    </div>
                </div>
                <div>
                    {orders.map((order) => 
                    (
                        <OrderCard
                        key={order._id}
                        id={order._id}
                        image={order.image ?? null}
                        title={order.title}
                        price={order.price}
                        productId={order.productId}
                    />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}