import Logo from "../../assets/Logo(1).png";

export default function Separator() {
  return (
    <div className="
    sm:max-w-[640px]
    relative bg-redFred-100 w-[auto] h-[100px] text-left text-[24px] text-black font-bayon">
      <img
        className="
        sm:static sm:-mt-2 sm:ml-[280px]
        absolute top-[-10px] left-[890px] sm:mx-auto w-[100px] h-[100px] object-cover"
        alt=""
        src={Logo}
      />
      <p className="
      
      absolute font-impact-bold text-31xl top-[5px] left-[773px] sm:top-[20%] sm:left-[52%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 leading-[32px]">
        genshysuplements
      </p>
      <p className="absolute font-bayon-bold top-[25px] left-[1125px] sm:top-[35%] sm:left-[81%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 text-[20px] leading-[32px] font-inter flex items-center w-[21px] h-[25px]">
        ©
      </p>
    </div>
  );
}
