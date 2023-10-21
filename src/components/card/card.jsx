import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux"
import {
  postProductToCart,
} from '../../redux/cart/cartsActions'
export function Card({ image, title, category, price, id }) {
  const dispatch = useDispatch()


const addToCart = (data)=>{
dispatch(postProductToCart(data))
console.log('producto agregado al carrito')

}
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
        <span className="grid justify-start text-left	 text-whiteFred-300 font-bebas 	">
          <NavLink to={`/Detail/${id}`}>
            <span className="justify-start text-whiteFred-300 text-[24px]">
              <span>{title}</span>
            </span>
          </NavLink>
          <span >
            <span >{category}</span>
          </span>
          <span className="text-[24px]">
            <span>${price}</span>
          </span>
        </span>
        <span className="font-bebas">
        <button
            onClick={addToCart}
            className="rounded-none bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none hover:border-transparent"
          >
            Add to Cart
          </button>
        </span>
      </span>
    </span>
  );
}
