import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/cartActions";


export function Card({ image, title, category, price, id }) {
  const dispatch = useDispatch();

  const addToCart = (data) => {
    dispatch(addProductToCart(data));
    console.log("producto agregado al carrito");
  };

  return (
    <span className="grid justify-center rounded-sm items-center bg-graym w-[380px] h-[550px] mx-[auto] mt-[2%]">
      <span className="justify-center 	" href={`/product/${id}`}>
        <NavLink to={`/Detail/${id}`}>
          <img
            src={image}
            className="object-contain h-[335px] w-[335px]"
            srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
            alt="Product Image"
          />
        </NavLink>
      </span>
      <span className=" flex justify-between items-center">
        <span className="grid justify-start text-left	 text-whiteFred-100">
          <NavLink to={`/Detail/${id}`}>
            <span className="justify-start text-orangeFred-100 text-[25px] font-bebas">
              <span>{title}</span>
            </span>
          </NavLink>
          <span className="my-[15px]">
            <span>{category}</span>
          </span>
          <span className="text-[24px]">
            <span>${price}</span>price
          </span>
        </span>
        <span className="font-bebas 	">
          <button
            onClick={() => addToCart({ id, title, image, price })}
            className="rounded-none bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none hover:border-transparent"
          >
            Add to Cart
          </button>
        </span>
      </span>
    </span>
  );
}

// import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { postProductToCart } from "../../redux/cart/cartActions";
// export function Card({ image, title, category, price, id }) {
//   const dispatch = useDispatch();

//   const addToCart = (data) => {
//     dispatch(postProductToCart(data));
//     console.log("producto agregado al carrito");
//   };

//   return (
//     <span className="grid justify-center rounded-sm items-center bg-graym w-[380px] h-[550px] mx-[auto] mt-[2%]">
//       <span className="justify-center 	" href={`/product/${id}`}>
//         <NavLink to={`/Detail/${id}`}>
//           <img
//             src={image}
//             className="object-contain h-[335px] w-[335px]"
//             srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
//             alt="Product Image"
//           />
//         </NavLink>
//       </span>
//       <span className=" flex justify-between items-center">
//         <span className="grid justify-start text-left	 text-whiteFred-100">
//           <NavLink to={`/Detail/${id}`}>
//             <span className="justify-start text-orangeFred-100 text-[25px] font-bebas">
//               <span>{title}</span>
//             </span>
//           </NavLink>
//           <span className="my-[15px]">
//             <span>{category}</span>
//           </span>
//           <span className="text-[24px]">
//             <span>${price}</span>
//           </span>
//         </span>
//         <span className="font-bebas 	">
//           <button
//             onClick={addToCart}
//             className="rounded-sm font-impact bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none hover:border-transparent"
//           >
//             Add to Cart
//           </button>
//         </span>
//       </span>
//     </span>
//   );
// }