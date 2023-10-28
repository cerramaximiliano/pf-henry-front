import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import bg from "../../assets/background-pf.png";
import spam from "../../assets/SpamCalite.png";

export default function Header() {
  const [fallAnimation, setFallAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFallAnimation(false);
    }, 1000);
  }, []);

  return (
    <div className="relative bg-blackFred-300 w-full text-center text-whiteFred-100 font-impact">
      <div className="flex flex-col sm:flex-row xl:flex-col items-center justify-center">
        <img className="max-w-full xl:h-[55em]" alt="" src={bg} />
        <div className="sm:ml-4 xl:ml-0 absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl sm:text-5xl xl:text-6xl">
            YOUR NUTRITION FOREVER
          </div>
          <div className=" flex flex-col " >
            <h1 className=" flex flex-col text-3xl sm:text-5xl xl:text-6xl">BEST SUPPLEMENT SELLERS</h1>
          </div>
          <NavLink to="/products" className="bg-redFred-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-full sm:w-[250px] xl:w-[300px] h-16 mt-6 sm:mt-4 xl:mt-6 mx-auto">shop now</NavLink>
          <div className="text-3xl sm:text-5xl xl:text-6xl mt-4 sm:mt-0 xl:mt-4">
            ONLINE SUPPLEMENTS STORE
          </div>
        </div>
      </div>
    </div>
  );
}