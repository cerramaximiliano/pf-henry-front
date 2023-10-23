import React from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>MyAccount</h1>
            <h3>Order filled!</h3>
        </div>
    )
}