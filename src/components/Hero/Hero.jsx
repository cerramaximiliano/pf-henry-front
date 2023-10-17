import Home from "../../assets/Home1.png"
import vit from "../../assets/Vitamina.png"
import prote from "../../assets/Proteina.png"
import cel from "../../assets/App.png"
import { NavLink } from "react-router-dom"
// import Carousel from "../Carrousel/Carrousel"

export default function Hero() {
    return (
        <div >
            {/* <Carousel/> */}
            {/* <img src={Home} alt="" className="w-[full] h-[40vw] object-cover" / > */}
                <section className="flex items-center">
                <div className=" ml-[80px] mb-[40px] bg-[#1e1e1e] w-[540px] h-[600px]">
                <p className="ml-[-200px] font-impact text-30xl text-white mb-[0px]">GET THE APP</p>
                <NavLink to="/#" className="ml-[-400px] z-10 font-impact  leading-[32px] text-darkorange hover:text-crimson">SOON...</NavLink><br/>
                <img src={cel} alt="" className=" -z-50  ml-[-140px] mt-[42px] w-[400px] h-[450px]"/>
            </div>
            <div className=" ml-[60px] mb-[40px] bg-[#1e1e1e] w-[540px] h-[600px]">
                <img src={vit} alt="" className="mt-[100px] w-[350px] h-[350px]"/>
                <p className=" font-impact text-30xl text-white mb-[0px]">VITAMINS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-darkorange hover:text-crimson">SHOP NOW</NavLink>
            </div>
            <div className="ml-[60px] mb-[40px] bg-[#1e1e1e] w-[540px] h-[600px]">
                <img src={prote} alt="" className="mt-[100px] w-[350px] h-[350px]"/><br/>
                <p className=" font-impact text-30xl text-white mb-[0px]">SUPPLEMETS</p>
                <NavLink to="/products" className=" font-impact  leading-[32px] text-darkorange hover:text-crimson">SHOP NOW</NavLink>
            </div>
            </section>
        </div>
    );
}