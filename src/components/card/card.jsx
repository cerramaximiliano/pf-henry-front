import "./cardStyle.css";
import { NavLink } from "react-router-dom";

export function Card({ image, title, category, price, id }) {
  
  return (
    <span className="flex flex-col justify-end w-[300px] h-[400px]">
      <span href={`/product/${id}`}>
        <NavLink to={`/Detail/${id}`}>
          <img
            src={image}
            className="object-contain h-[335px] w-[335px]"
            srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
            alt="Product Image"
          />
        </NavLink>
      </span>
      <NavLink to={`/Detail/${id}`}>
        <span>
          <span>{title}</span>
        </span>
      </NavLink>
      <span>
        <span>{category}</span>
      </span>
      <span>
        <span>${price}</span>
      </span>
    </span>
  );
}
