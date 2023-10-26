import Logo from "../../assets/Logo(1).png"
export default function Separator() {
    return (
        <div className="relative bg-redFred-100 w-full h-[100px] overflow-hidden text-left text-[24px] text-black font-bayon">
            <img
                className="absolute top-[-10px] left-[890px] w-[100px] h-[100px] object-cover"
                alt=""
                src={Logo}
            />
            <p className="absolute font-impact-bold text-31xl top-[5px] left-[773px] leading-[32px]">
                genshysuplements
            </p>
            <p className="absolute font-bayon-bold top-[25px] left-[1125px] text-[20px] leading-[32px] font-inter flex items-center w-[21px] h-[25px]">
                ©
            </p>
        </div>
    )
};
