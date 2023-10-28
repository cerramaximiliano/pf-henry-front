import logo from "../../assets/Logo(1).png";

export function Footer() {
    return (
        <div className="flex flex-row flex-wrap">
            <div className="flex flex-row flex-1 justify-around"> 
                <div className="">
                    <p className="font-impact  leading-[32px] text-orangeFred-300">DEVELOPERS</p>
                    <div className="flex flex-row justify-around">
                    <div>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                    </div>
                    <div>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                        <p className="hover:text-redFred-100 font-inter text-blackFred-100 cursor-pointer">@gmail.com</p>
                    </div>
                    </div>


                </div>
                <div className="">
                    <p className="font-impact  leading-[32px] text-orangeFred-300">LINKS</p>
                    <p className="font-impact">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="/home">Home</a>
                    </p>
                    <p className="font-impact">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="/products">Products</a>
                    </p>
                    <p className="font-impact">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="">Pay method</a>
                    </p>
                    <p className="font-impact">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="/aboutus">About us</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div>
                    <img className=""   alt=""  src={logo}/>
                </div>
                <div>
                    <div className="relative leading-[32px] text-blackFred-100">
                        <p className="font-impact">©2023 GENSHYSUPLEMENTS. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div>
                    <div>
                        <p className="font-impact  leading-[32px] text-orangeFred-300">NEWSLETTER</p>
                    </div>
                    <div className="flex justify-around">
                        <input className="relative  bg-whiteFred-100 py-[8.5px] px-[24px] font-bebas rounded-sm w-[200px] mt-6" placeholder="E-MAIL"/>
                        <button className="relative bg-redFred-300 text-blackFred-300 py-[8px] px-[28px] font-bebas rounded-sm mt-6">submit</button>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex justify-around">
                        <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                        <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                        <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                        <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};