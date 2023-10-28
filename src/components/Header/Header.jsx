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
        className="absolute
        sm:ml-[200px] sm:max-w-[300px] sm:
        ml-[250px] w-[1650] h-full object-cover"
        alt=""
        src={bg}
      />
        <p className="absolute mt-[700px] ml-[400px] text-whiteFred-100 text-5xl mb-4">YOUR</p>
        <p className="absolute mt-[750px] ml-[350px] text-orangeFred-300 text-5xl">NUTRITION</p>
        <p className="absolute mt-[800px] ml-[370px] text-whiteFred-100 text-5xl mb-4">FOREVER</p>
        <div className="absolute bg-redFred-300 rounded-xlshadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[300px] h-16 mt-[600px] ml-[100px]" />
        <p className="absolute font-impact text-whiteFred-100 text-5xl mb-4 mt-[400px] ml-[100px]">BEST</p>
        <p className="absolute font-impact text-whiteFred-100 text-5xl mb-4 mt-[450px] ml-[100px]">SUPPLEMENT</p>
        <p className="absolute font-impact text-orangeFred-300 text-5xl mb-4 mt-[500px] ml-[100px]">SELLERS</p>
        <NavLink to="/products" className="absolute font-impact text-whiteFred-100 hover:text-orangeFred-300 text-5xl mb-4 mt-[600px] ml-[150px]">shop now</NavLink>
        <p className="absolute text-grey text-5xl mb-4 mt-[80px] ml-[1300px]">ONLINE</p>
        <p className="absolute text-orangeFred-300 text-5xl mt-[130px] ml-[1250px]">SUPPLEMENTS</p>
        <p className="absolute text-whiteFred-100 text-5xl mb-4 mt-[180px] ml-[1300px]">STORE</p>
      </div>
  );
}  