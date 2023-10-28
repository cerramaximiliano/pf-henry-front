import SPAM1 from "../../assets/SPAM1.png";
import SPAM2 from "../../assets/SPAM2.png";
import SPAM3 from "../../assets/SPAM3.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <section className="flex flex-wrap bg-whiteFred-100 w-[auto] h-[960px] items-center">
        <NavLink to="/products" className="transition mx-[30px] transform hover:scale-110 rounded-lg bg-graym w-[540px] h-[630px]">
          <img src={SPAM1} alt="" className="w-[500px] h-[500px]" />
          <p className="font-impact text-30xl text-blackFred-100 mb-0">SNAKS</p>
          <NavLink to="/products" className="font-impact leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
        </NavLink>
        <NavLink to="/products" className="transition mx-[30px] transform hover:scale-110 rounded-lg bg-graym w-[540px] h-[630px]">
          <img src={SPAM2} alt="" className="w-[500px] h-[500px]" />
          <p className="font-impact text-30xl text-blackFred-100 mb-0">SUPPLEMENTS</p>
          <NavLink to="/products" className="font-impact leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
        </NavLink>
        <NavLink to="/products" className="transition mx-[30px] transform hover:scale-110 rounded-lg bg-graym w-[540px] h-[630px]">
          <img src={SPAM3} alt="" className="w-[500px] h-[500px]" /><br />
          <p className="font-impact text-30xl text-blackFred-100 mb-0">VITAMINS</p>
          <NavLink to="/products" className="font-impact leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
        </NavLink>
      </section>
    </div>
  );
}
