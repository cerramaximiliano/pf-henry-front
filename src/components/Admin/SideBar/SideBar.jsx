import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { FiltersContext } from "../../../context/filter"

export default function NavBar({ selectedMenu, setSelectedMenu }) {
    const { filters, setFilters } = useContext(FiltersContext)

    return (
        <div className="relative px-[10px] mt-6 shadow-md bg-graym font-impact w-[200px] h-[600px]">
            <span>
            <h2 className=" mt-[100px] text-center text-blackFred-300" >Dashboard</h2>
            <div className=" grid justify-between">
                <button onClick={()=>{setSelectedMenu('Products'); setFilters({...filters, page: 1})}} className="my-[25px] bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm hover:border-transparent w-[150px]	">Products</button>
            </div>

            </span>
            <div className=" grid justify-between">
                <button className="my-[25px] bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm hover:border-transparent w-[150px]	"
                onClick={()=>{setSelectedMenu('Users'); setFilters({...filters, page: 1})}}>Users</button>
            </div>
            <span>
            <div className=" grid justify-between">
                <button className="my-[25px] bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent w-[150px]	"
                onClick={()=>{setSelectedMenu('Orders'); setFilters({...filters, page: 1})}}>Orders</button>
            </div>
            </span>
            <span>
            <div className=" grid justify-between">
                <NavLink to="/addproduct">
                <button  className="my-[25px] bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm hover:border-transparent w-[150px]">Add Product</button></NavLink>
            </div>
            </span>

        </div>
    )

}