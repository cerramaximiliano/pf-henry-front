import SPAM1 from "../../assets/SPAM1.png"
import SPAM2 from "../../assets/SPAM2.png"
import SPAM3 from "../../assets/SPAM3.png"
import { NavLink } from "react-router-dom"

export default function Hero() {
    return (
        <div className=" 
        sm:max-w-1 sm:max-h-auto
        mx-[auto] overflow-hidden">
                <section className="
                sm:flex sm:flex-col sm:-ml-[40px] sm:mt-[20px] sm:mb-[50px]
                flex bg-whiteFred-100 w-screen h-[960px]  items-center">
                <NavLink to="/products"className="
                sm:w-[200px] sm:h-[450px] sm:pt-[20px]
                transition transform hover:scale-110 ml-[80px] rounded-lg mb-[40px] bg-graym w-[540px] h-[600px]">
                <img src={SPAM1} alt="" className="
                sm:w-[200px] sm:h-[200px]
                mt-[-30px] w-[500px] h-[500px]"/>
                <p className=" font-impact text-30xl text-blackFred-100 mb-[0px]">SNAKS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
            </NavLink>
            <NavLink to="/products" className="
            sm:w-[200px] sm:h-[450px] sm:pt-[20px] sm:ml-[80px]
            transition transform hover:scale-110 ml-[60px] rounded-lg mb-[40px] bg-graym w-[540px] h-[600px]">
                <img src={SPAM2} alt="" className="
                sm:w-[200px] sm:h-[200px]
                mt-[-30px] w-[500px] h-[500px]"/>
                <p className=" font-impact text-30xl text-blackFred-100 mb-[0px]">SUPPLEMENTS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
            </NavLink>
            <NavLink to="/products" className="
            sm:w-[200px] sm:h-[450px] sm:pt-[20px] sm:ml-[80px]
            transition transform hover:scale-110 ml-[60px] rounded-lg mb-[40px] bg-graym w-[540px] h-[600px]">
                <img src={SPAM3} alt="" className="
                sm:w-[200px] sm:h-[200px]
                mt-[-30px] w-[500px] h-[500px]"/><br/>
                <p className=" font-impact text-30xl text-blackFred-100 mb-[0px]">VITAMINS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</NavLink>
            </NavLink>
            </section>
        </div>
    );
}