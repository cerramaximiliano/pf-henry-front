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
    <div className="relative flex flex-col m-auto text-center bg-blackFred-300 w-full sm:h-[900px] py-5 text-whiteFred-100 font-impact">
      <div className="sm:flex-row xl:flex-col flex flex-col items-center ">
        <img className="bg-contain bg-center h-[900px] sm:h-auto max-w-full xl:block sm:mt-[200px]" alt="" src={bg} />
        <div className="sm:ml-4 xl:ml-0 absolute inset-0">
          <div className="sm:text-center xl:text-center">
            <p className="sm:text-9xl xl:text-31xl">BEST SUPPLEMENT SELLERS</p>
            <p className="sm:text-9xl xl:text-31xl">YOUR NUTRITION FOREVER</p>
            <p className="sm:text-9xl xl:text-31xl">ONLINE SUPPLEMENTS STORE</p>
          </div>
          <button to="/products" className="bg-redFred-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-full sm:w-[250px] xl:w-[300px] h-16 mt-6 sm:mt-[350px] xl:mt-6 mx-auto">shop now</button>
        </div>
      </div>
    </div>
  );
}  