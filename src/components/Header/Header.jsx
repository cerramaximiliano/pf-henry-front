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
    <div className={`flex bg-blackFred-300 min-w-[900px] min-h-screen ${fallAnimation ? "animate-fall" : ""}`}>
      <img
        className="
        md:w-[1100px] md:h-[650px] md:mt-[auto] md:m-auto 
        lg:w-[1300px] lg:h-[750px] lg:mt-[auto] lg:m-auto
        absolute inset-0 w-[1550px] h-[900px] mt-10 mx-auto object-cover"
        alt=""
        src={bg}
      />
      <div className="flex mx-auto">
        <p className="
        md:-ml-[250px] md:mt-[630px]
        lg:-ml-[450px] lg:mt-[580px]
        absolute -ml-[550px] mt-[700px] font-impact text-whiteFred-100 text-5xl ">YOUR</p>
        <p className="
        md:-ml-[300px] md:mt-[680px]
        lg:-ml-[500px] lg:mt-[630px]
        absolute -ml-[600px] mt-[750px] font-impact text-orangeFred-300 text-5xl ">NUTRITION</p>
        <p className="
        md:-ml-[280px] md:mt-[730px]
        lg:-ml-[480px] lg:mt-[680px]
        absolute -ml-[580px] mt-[800px] font-impact text-whiteFred-100 text-5xl ">FOREVER</p>
        <p className="
        md:-ml-[580px]
        lg:-ml-[680px] lg:mt-[300px]
        absolute -ml-[900px] mt-[400px] font-impact text-whiteFred-100 text-31xl">BEST</p>
        <p className="
        md:-ml-[580px]
        lg:-ml-[680px] lg:mt-[350px]
        absolute -ml-[900px] mt-[450px] font-impact text-whiteFred-100 text-31xl">SUPPLEMENT</p>
        <p className="
        md:-ml-[580px]
        lg:-ml-[680px] lg:mt-[400px]
        absolute -ml-[900px] mt-[500px] font-impact text-orangeFred-300 text-31xl">SELLERS</p>
        <p className="
        md:ml-[367px]
        lg:ml-[467px]
        absolute  ml-[717px] mt-[50px] font-impact text-whiteFred-100 text-5xl ">ONLINE</p>
        <p className="
        md:ml-[300px]
        lg:ml-[400px]
        absolute  ml-[650px] mt-[100px] font-impact text-orangeFred-300 text-5xl ">SUPPLEMENTS</p>
        <p className="
        md:ml-[377px]
        lg:ml-[477px]
        absolute  ml-[727px] mt-[150px] font-impact text-whiteFred-100 text-5xl ">STORE</p>
        <NavLink to="/products">
          <button className="
          md:-ml-[580px]
          lg:-ml-[680px] lg:mt-[500px]
          absolute -ml-[900px] mt-[600px] bg-redFred-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] font-impact text-21xl w-[300px] h-16">
            <p className="-mt-[15px]">shop now</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}     