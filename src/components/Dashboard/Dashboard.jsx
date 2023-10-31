import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderCard from "../OrderCard/OrderCard";
import AllOrdersCards from "../AllOrderCards/AllOrderCards";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Dashboard() {
    const { pathname } = useLocation();
    const {id} = useParams();
    const {user_detail} = useSelector((state) => state.users);

    const URLBASE = import.meta.env.VITE_URL_BASE;
    const [orders, setOrders] = useState([]);
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [totalOrders, setTotalOrders] = useState("");
    const [allOrders, setAllOrders] = useState([]);

    useEffect( () => {
        if( id  ){
            const data = axios(`${URLBASE}/orders/update/${id}`)
            .then(({data}) => {
                setDate(data.order.createdAt)
                setStatus(data.order.status)
                setOrders(data.order.products)
            })
            .catch(err => {
                console.log(err)
            })
        }else {
            const data = axios(`${URLBASE}/orders/userId/${user_detail._id}`)
            .then(({data}) => {
                setTotalOrders(data.total);
                setAllOrders(data.orders);
            })
            .catch(err => {
                console.log(err)
            })
        }
      }, [user_detail._id])


    return (
            <div>
                <div className="flex justify-between m-auto w-1/2">
                    <a className="text-blackFred-300 hover:text-orangeFred-300 cursor-pointer" href="/myaccount/users">Your Profile</a>
                    <a className="text-blackFred-300 hover:text-orangeFred-300 cursor-pointer" href="/myaccount/orders">Orders</a>
                </div>
            <div className="flex justify-around w-1/2 m-auto rounded-sm bg-graym p-[20px] flex-wrap">

            <div className="flex flex-col justify-center">
                {orders.length > 0 ? (
                    <>
                    <div>
                        <h4>Order Id</h4>
                        <p>{id}</p>
                    </div>
                    <div>
                        <h4>Date</h4>
                        <p>{date.slice(0,10)}</p>
                    </div>
                    <div>
                        <h4>Status</h4>
                        <p>{status.toUpperCase(0)}</p>
                    </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h4>User Id</h4>
                            <p>{user_detail._id}</p>
                        </div>
                        <div>
                            <h4>Total Orders</h4>
                            <p>{totalOrders}</p>
                        </div>
                    </>

                )
                }
                </div>
                {orders.length > 0 ? (
                    <div className="flex flex-col flex-wrap justify-center">
                    {orders.map((order) => (
                    <OrderCard
                        key={order._id}
                        id={order._id}
                        image={order.image ?? null}
                        title={order.title}
                        price={order.price}
                        productId={order.productId}
                        review={order.review}
                        orderId={id}
                    />
                    ))}
                    </div>
                ) : (
                    <div className="flex flex-row flex-wrap justify-between w-full">

                        {allOrders && allOrders.length > 0 ?(
                                                allOrders.map(order => (
                                                    <AllOrdersCards
                                                        key={order._id}
                                                        id={order._id}
                                                        total={order.total}
                                                        date={order.createdAt.slice(0,10)}
                                                        status={order.status.toUpperCase(0)}
                                                    />
                                                )))
                                                : (
                                                    <p>Orders Not Found</p>
                                                )
                        }
                    </div>
                )


                }
            </div>
        </div>
    )
}