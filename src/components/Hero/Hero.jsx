import SPAM1 from "../../assets/SPAM1.png";
import SPAM2 from "../../assets/SPAM2.png";
import SPAM3 from "../../assets/SPAM3.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <section className="flex flex-wrap bg-whiteFred-100 xl:w-[auto] xl:h-[960px] items-center">
        <NavLink to="/products" className="sm:py-5 sm:my-2 sm:mx-auto transition mx-[30px] transform hoverscale-110 rounded-lg bg-graym sm:w-[270px] sm:h-[315px] xl:w-[540px] xl:h-[630px]">
          <img src={SPAM1} alt="" className="sm:w-[250px] sm:h-[250px] w-[500px] h-[500px]" />
          <p className="font-impact text-30 text-blackFred-100 mb-0">SNAKS</p>
          <NavLink to="/products" className="font-impact leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
        </NavLink>
        <NavLink to="/products" className="sm:py-5 sm:my-2 sm:mx-auto transition mx-[30px] transform hoverscale-110 rounded-lg bg-graym sm:w-[270px] sm:h-[315px] xl:w-[540px] xl:h-[630px]">
          <img src={SPAM2} alt="" className="sm:w-[250px] sm:h-[250px] w-[500px] h-[500px]" />
          <p className="font-impact text-30 text-blackFred-100 mb-0">SUPPLEMENTS</p>
          <NavLink to="/products" className="font-impact leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
        </NavLink>
        <NavLink to="/products" className="sm:py-5 sm:my-2 sm:mx-auto transition mx-[30px] transform hoverscale-110 rounded-lg bg-graym sm:w-[270px] sm:h-[315px] xl:w-[540px] xl:h-[630px]">
          <img src={SPAM3} alt="" className="sm:w-[250px] sm:h-[250px] w-[500px] h-[500px]" /><br />
          <p className="font-impact text-30 text-blackFred-100 mb-0">VITAMINS</p>
          <NavLink to="/products" className="font-impact leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
        </NavLink>
      </section>
    </div>
  );
}
