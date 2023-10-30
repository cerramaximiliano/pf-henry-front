export default function AllOrdersCards({id,total,date,status}) {
    return (
        <div className="flex justify-evenly">
        <span className="w-full flex justify-between items-center">
          <span className="grid justify-start text-left	 text-whiteFred-100">
            <h4 className="text-black  m-0">Order Id</h4>
                <p className="text-black m-0">{id}</p>
            <h4 className="text-black m-0">Total</h4>
                <p className="text-black m-0">${total.toFixed(2)}</p>
            <h4 className="text-black m-0">Date</h4>
                <p className="text-black m-0">{date}</p>
            <h4 className="text-black m-0">Status</h4>
              <p className="text-black m-0">{status}</p>
          </span>
          </span>
      </div>
    )
}