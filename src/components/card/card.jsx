import "./cardStyle.css";
import { NavLink } from "react-router-dom";

export function Card({ image, title, category, price, id }) {
  
  return (
    <span className="grid justify-center	rounded-[15px] items-center bg-[#fafdfe]	 w-[380px] h-[500px] mx-[auto]">
      <span className="justify-center 	"  href={`/product/${id}`}>
        <NavLink to={`/Detail/${id}`} >
          <img 
            src={image}
            className="object-contain  h-[335px] w-[335px]"
            srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
            alt="Product Image"
          />
        </NavLink>
      </span>
      <span className=" flex justify-between items-center">
        <span className="grid justify-start text-left	 text-black font-bebas 	">
          <NavLink to={`/Detail/${id}`}>
            <span className="justify-start text-black">
              <span>{title}</span>
            </span>
          </NavLink>
          <span >
            <span >{category}</span>
          </span>
          <span >
            <span>${price}</span>
          </span>
        </span>
        <span className="font-bebas">
          <button>Add to Cart</button>
        </span>
      </span>
    </span>
  );
}
