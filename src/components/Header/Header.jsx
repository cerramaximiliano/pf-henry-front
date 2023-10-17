import { NavLink } from "react-router-dom";
import bg from "../../assets/background-pf.png"
import spam from "../../assets/SpamCalite.png"

export default function Header() {

  return (
    <div className="relative bg-[#121212] w-full h-[960px] overflow-x-hidden text-left text-21xl text-white font-impact">
      <img
        className=" relative  top-[10px] left-[280px] w-[1700px] h-[full] object-cover"
        alt=""
        src={bg}
      />
      <p className="absolute top-[731px] left-[319px] leading-[32px] flex items-center w-24 h-[34px] text-gray">
        YOUR
      </p>
      <p className="absolute top-[827px] left-[303px] leading-[32px] flex items-center w-[129px] h-[34px] text-gray">
        FOREVER
      </p>
      <p className="absolute top-[779px] left-[295px] leading-[32px] text-darkorange flex items-center w-36 h-[34px]">
        NUTRITION
      </p>
      <div className="absolute top-[573px] left-[129px] bg-crimson rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[300px] h-16" />
      <p className="absolute top-[341px] left-[137px] text-5xl leading-[32px] font-impact text-gray">
        BEST
      </p>
      <p className="absolute top-[402px] left-[137px] text-5xl leading-[32px] font-impact text-gray">
        SUPPLEMENT
      </p>
      <p className="absolute top-[463px] left-[137px] text-5xl leading-[32px] font-impact text-darkorange">
        SELLERS
      </p>
      <NavLink to="/home" className="absolute rounded-xl top-[589px] left-[206px] leading-[32px] font-impact text-gray hover:text-darkorange">
        shop now
      </NavLink>
      <p className="absolute top-[31px] left-[1297px] text-3xl leading-[32px] flex items-center w-44 h-[39px] text-grey">
        ONLINE
      </p>
      <p className="absolute top-[131px] left-[1317px] text-3xl leading-[32px] flex items-center w-[174px] h-[38px] text-gray">
        STORE
      </p>
      <p className="absolute top-[81px] left-[1226px] text-3xl leading-[32px] text-darkorange flex items-center w-[356px] h-[39px]">
        SUPPLEMENTS
      </p>
      <br />
      <div className="relative">
  <img src={spam} alt="" className="z-0 w-full h-auto" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
    <p className="text-10xl mb-4">Procesos de calidad</p>
    <p className="text-10xl mb-4">Estandarizados</p>
    <div className="w-96 rounded-sm p-2.5 mb-4">
      <p className="text-lg text-white text-10xl text-center">
        Confianza y calidad a través de procesos refinados que cumplen con las normas de seguridad
      </p>
    </div>
    <div className="w-96 rounded-xl bg-crimson h-24 flex items-center justify-center">
      <NavLink to="/home" className="text-30-xl text-white hover:text-darkorange font-impact tracking-wide">
        Get started
      </NavLink>
    </div>
  </div>
</div>
</div>
  )
}