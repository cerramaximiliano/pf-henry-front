import { useParams } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function MyAccount() {
    const {id} = useParams();
    const URLBASE = import.meta.env.VITE_URL_BASE;
    const [orders, setOrders] = useState([]);
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");

    useEffect( () => {

            const data = axios(`${URLBASE}/orders/update/${id}`)
            .then(({data}) => {
                setDate(data.order.createdAt)
                setStatus(data.order.status)
                setOrders([...orders, ...data.order.products])
            })
            .catch(err => console.log(err))
      }, [id])
    return (
        <div>
            <Dashboard orders={orders} orderId={id} date={date} status={status}/>
        </div>
    )
}