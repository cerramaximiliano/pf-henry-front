import { NavLink } from "react-router-dom";

export function CartMoldel({  title,  price, id }) {
  
return (
        <span>
          <NavLink to={`/Detail/${id}`}>
            <span>
              <span>{title}</span>
            </span>
          </NavLink>          
          <span>
            <span>${price}</span>
          </span>
        </span>        
  );
}