
import { NavLink } from "react-router-dom"

export default function NavBar() {

    return (
        <div className=" relative p-4 pl-10 mt-6 shadow-md bg-graym left-[100px] font-impact w-[200px] h-[595px]">
            <span>
            <h2 className=" mt-[100px] text-left" >Dashboard</h2>
            <div className=" grid justify-between">
                <button className="rounded-none	my-[25px] bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	">Products</button>
            </div>

            </span>
            <div className=" grid justify-between">
                <button className="rounded-none	my-[25px] bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	">Users</button>
            </div>
            <span>
            <div className=" grid justify-between">
                <button className="rounded-none	my-[25px] bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	">Orders</button>
            </div>
            </span>
            <span>
            <div className=" grid justify-between">
                <NavLink to="/addproduct">
                <button  className="rounded-none	my-[25px] bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	">Add Product</button></NavLink>
            </div>
            </span>

        </div>
    )

}