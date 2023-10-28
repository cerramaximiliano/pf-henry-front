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
    <div className={`flex bg-blackFred-300 min-h-screen ${fallAnimation ? "animate-fall" : ""}`}>
      <img
        className="absolute inset-0 w-[1550px] h-[900px] mt-10 mx-auto object-cover"
        alt=""
        src={bg}
      />
      <div className="flex mx-auto">
        <p className="absolute -ml-[550px] mt-[700px] font-impact text-whiteFred-100 text-5xl ">YOUR</p>
        <p className="absolute -ml-[600px] mt-[750px] font-impact text-orangeFred-300 text-5xl ">NUTRITION</p>
        <p className="absolute -ml-[580px] mt-[800px] font-impact text-whiteFred-100 text-5xl ">FOREVER</p>
        <p className="absolute -ml-[900px] mt-[400px] font-impact text-whiteFred-100 text-31xl">BEST</p>
        <p className="absolute -ml-[900px] mt-[450px] font-impact text-whiteFred-100 text-31xl">SUPPLEMENT</p>
        <p className="absolute -ml-[900px] mt-[500px] font-impact text-orangeFred-300 text-31xl">SELLERS</p>
        <p className="absolute  ml-[217px] mt-[50px] font-impact text-whiteFred-100 text-5xl ">ONLINE</p>
        <p className="absolute  ml-[150px] mt-[100px] font-impact text-orangeFred-300 text-5xl ">SUPPLEMENTS</p>
        <p className="absolute  ml-[227px] mt-[150px] font-impact text-whiteFred-100 text-5xl ">STORE</p>
        <NavLink to="/products">
          <button className="absolute -ml-[900px] mt-[600px] bg-redFred-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] font-impact text-21xl w-[300px] h-16">
            <p className="-mt-[15px]">shop now</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}     