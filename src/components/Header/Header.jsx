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
    <div className={`relative bg-[#121212] ml-[-50px] mt-[-50px] w-[auto] h-[960px] text-left text-21xl text-whiteFred-100 font-impact ${fallAnimation ? "animate-fall" : ""}`}>
      <img
        className="relative ml-[250px] w-[1650] h-full object-cover"
        alt=""
        src={bg}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="m-0 ml-[200px] text-whiteFred-100 text-5xl mb-4">YOUR</p>
        <p className="m-0 text-whiteFred-100 text-5xl mb-4">FOREVER</p>
        <p className="m-0 text-orangeFred-300 text-5xl mb-4">NUTRITION</p>
        <div className="relative bg-redFred-300 rounded-xlshadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[300px] h-16" />
        <p className="m-0 font-impact text-whiteFred-100 text-5xl mb-4">BEST</p>
        <p className="m-0 font-impact text-whiteFred-100 text-5xl mb-4">SUPPLEMENT</p>
        <p className="m-0 font-impact text-orangeFred-300 text-5xl mb-4">SELLERS</p>
        <NavLink to="/products" className="font-impact text-whiteFred-100 hover:text-orangeFred-300 text-5xl mb-4">shop now</NavLink>
        <p className="m-0 text-grey text-5xl mb-4">ONLINE</p>
        <p className="m-0 text-whiteFred-100 text-5xl mb-4">STORE</p>
        <p className="m-0 text-orangeFred-300 text-5xl ml-4">SUPPLEMENTS</p>
      </div>
    </div>
  );
}  