import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import bg from "../../assets/background-pf.png";

export default function Header() {
  const [fallAnimation, setFallAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFallAnimation(false);
    }, 1000);
  }, []);

  return (
    <div className={`relative flex flex-col m-auto text-center bg-blackFred-300 w-full xl:h-[850px] sm:h-[800px] py-5 text-whiteFred-100 font-impact ${fallAnimation ? "animate-fall" : ""}`}>
      <div className="sm:flex-row xl:flex-col flex flex-col items-center">
        <img className="bg-contain bg-center xl:min-w-[auto] sm:h-auto max-w-full xl:block sm:mt-[200px]" alt="" src={bg} />
        <div className="sm:ml-4 xl:ml-0 absolute inset-0">
          <div className="sm:text-center xl:text-center">
            <div className="sm:mt-[10px] xl:mt-[300px] xl:ml-[100px] xl:text-left">
              <p className="sm:text-21xl xl:text-31xl sm:my-0 xl:my-0 text-whiteFred-100 font-impact">BEST</p>
              <p className="sm:text-21xl xl:text-31xl sm:my-0 xl:my-0 text-whiteFred-100 font-impact">SUPPLEMENT</p>
              <p className="sm:text-21xl xl:text-31xl sm:my-0 xl:my-0 text-orangeFred-300 font-impact">SELLERS</p>
            </div>
            <div className="sm:-ml-[300px] sm:mt-[250px] xl:mt-[100px] xl:ml-[500px] xl:text-left">
              <p className="sm:text-9xl xl:text-31xl sm:my-0 xl:my-0 text-whiteFred-100 font-impact">YOUR</p>
              <p className="sm:text-9xl xl:text-31xl sm:my-0 xl:my-0 text-orangeFred-300 font-impact">NUTRITION</p>
              <p className="sm:text-9xl xl:text-31xl sm:my-0 xl:my-0 text-whiteFred-100 font-impact">FOREVER</p>
            </div>
            <div className="sm:ml-[250px] sm:-mt-[100px] xl:-mt-[800px] xl:ml-[1400px]">
              <p className="sm:text-9xl xl:text-31xl sm:my-0 xl:my-0 text-whiteFred-100 font-impact">ONLINE</p>
              <p className="sm:text-9xl xl:text-31xl sm:my-0 xl:my-0 text-orangeFred-300 font-impact">SUPPLEMENTS</p>
              <p className="sm:text-9xl xl:text-31xl sm:my-0 xl:my-0 text-whiteFred-100 font-impact">STORE</p>
            </div>
          </div>
          <NavLink to="/products">
          <button className="bg-redFred-300 font-impact sm:text-[25px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-full sm:w-[250px] xl:w-[300px] h-16 mt-6 sm:mt-[100px] xl:ml-[1100px] xl:text-21xl xl:mt-[300px] mx-auto">
            <p className="xl:-mt-[20px] sm:-mt-[2px]">shop now</p>
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}  