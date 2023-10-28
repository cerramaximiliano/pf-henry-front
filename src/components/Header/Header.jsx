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
    <div className={`relative
    bg-[#121212] ml-[-50px] mt-[-50px] w-[auto] h-[960px] text-left text-21xl text-whiteFred-100 font-impact ${fallAnimation ? "animate-fall" : ""}`}>
      <img
        className="absolute
        sm:ml-[70px] sm:max-w-[700px] sm:max-h-[350px] sm:mt-[250px]
        ml-[250px] w-[1650] h-full object-cover"
        alt=""
        src={bg}
      />
        <p className="absolute
        sm:ml-[130px] sm:mt-[550px]
        mt-[700px] ml-[400px] text-whiteFred-100 text-5xl mb-4">YOUR</p>
        <p className="absolute 
        sm:ml-[80px] sm:mt-[600px]
        mt-[750px] ml-[350px] text-orangeFred-300 text-5xl">NUTRITION</p>
        <p className="absolute 
        sm:ml-[105px] sm:mt-[650px]
        mt-[800px] ml-[370px] text-whiteFred-100 text-5xl mb-4">FOREVER</p>
        <div className="absolute
        sm:ml-[220px] sm:mt-[750px]
        bg-redFred-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[300px] h-16 mt-[600px] ml-[100px]" />
        <p className="absolute
        sm:ml-[320px] sm:mt-[100px]
        font-impact text-whiteFred-100 text-5xl mb-4 mt-[400px] ml-[100px]">BEST</p>
        <p className="absolute
        sm:ml-[250px] sm:mt-[150px]
        font-impact text-whiteFred-100 text-5xl mb-4 mt-[450px] ml-[100px]">SUPPLEMENT</p>
        <p className="absolute
        sm:ml-[300px] sm:mt-[200px] 
        font-impact text-orangeFred-300 text-5xl mb-4 mt-[500px] ml-[100px]">SELLERS</p>
        <NavLink to="/products" className="
        sm:ml-[290px] sm:mt-[750px]
        absolute font-impact text-whiteFred-100 hover:text-orangeFred-300 text-14xl mb-4 mt-[600px] ml-[150px]">shop now</NavLink>
        <p className="
        sm:ml-[500px] sm:mt-[550px]
        absolute text-grey text-5xl mb-4 mt-[80px] ml-[1300px]">ONLINE</p>
        <p className="
        sm:ml-[400px] sm:mt-[600px]
        absolute text-orangeFred-300 text-5xl mt-[130px] ml-[1250px]">SUPPLEMENTS</p>
        <p className="
        sm:ml-[505px] sm:mt-[650px]
        absolute text-whiteFred-100 text-5xl mb-4 mt-[180px] ml-[1300px]">STORE</p>
      </div>
  );
}  