import Logo from "../../assets/Logo(1).png"
export default function Separator() {
    return (
        <div className="relative bg-redFred-100 w-full h-[180px] overflow-hidden text-left text-[24px] text-black font-bayon">
            <img
                className="absolute top-[0px] left-[890px] w-[140px] h-[160px] object-cover"
                alt=""
                src={Logo}
            />
            <p className="absolute font-impact-bold text-31xl top-[60px] left-[793px] leading-[32px]">
                genshysuplements
            </p>
            <p className="absolute font-bayon-bold top-[80px] left-[1150px] text-[20px] leading-[32px] font-inter flex items-center w-[21px] h-[25px]">
                ©
            </p>
        </div>
    )
};
