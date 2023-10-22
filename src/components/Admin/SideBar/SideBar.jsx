


export default function NavBar() {

    return (
        <div className=" fixed p-4 pl-10 -mt-4 shadow-md bg-graym left-12 font-impact w-[300px] h-[635px]">
            <span>
            <h2 className=" mb-[2px] mt-[0px] text-left	" >Dashboard</h2>
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
                <button className="rounded-none	my-[25px] bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	">Add Product</button>
            </div>
            </span>

        </div>
    )

}