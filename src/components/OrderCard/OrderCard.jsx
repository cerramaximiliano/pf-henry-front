import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function OrderCard({ image, title, price, productId }) {
  
  return (
    <span className="flex justify-evenly">
      <span className="w-full flex justify-between items-center">
        <span className="grid justify-start text-left	 text-whiteFred-100">
          <NavLink to={`/Detail/${productId}`}>
            <span className="justify-start text-orangeFred-100 text-[25px] font-bebas">
              <span>{title}</span>
            </span>
          </NavLink>
          <span className="text-[20px] text-black">
            <span>${price}</span>
          </span>
        </span>
      <span className="justify-center">
        <NavLink to={`/Detail/${productId}`}>
          <img
            src={image}
            className="object-contain h-[100px] w-[100px]"
            srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
            alt="Product Image"
          />
        </NavLink>
      </span>
      </span>
    </span>
  );
}
