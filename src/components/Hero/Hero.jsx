import SPAM1 from "../../assets/SPAM1.png"
import SPAM2 from "../../assets/SPAM2.png"
import SPAM3 from "../../assets/SPAM3.png"
import { NavLink } from "react-router-dom"

export default function Hero() {
    return (
        <div >
                <section className="flex items-center">
                <div className=" ml-[80px] rounded-sm mb-[40px] bg-[#1e1e1e] w-[540px] h-[600px]">
                <img src={SPAM1} alt="" className="mt-[100px] w-[350px] h-[350px]"/>
                <p className=" font-impact text-30xl text-whiteFred-100 mb-[0px]">SNAKS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
            </div>
            <div className=" ml-[60px] rounded-sm mb-[40px] bg-[#1e1e1e] w-[540px] h-[600px]">
                <img src={SPAM2} alt="" className="mt-[100px] w-[350px] h-[350px]"/>
                <p className=" font-impact text-30xl text-whiteFred-100 mb-[0px]">SUPPLEMENTS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
            </div>
            <div className="ml-[60px] rounded-sm mb-[40px] bg-[#1e1e1e] w-[540px] h-[600px]">
                <img src={SPAM3} alt="" className="mt-[100px] w-[350px] h-[350px]"/><br/>
                <p className=" font-impact text-30xl text-whiteFred-100 mb-[0px]">VITAMINS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
            </div>
            </section>
        </div>
    );
}