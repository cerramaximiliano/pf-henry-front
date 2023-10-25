import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/Cart/cartActions";

export default function OrderCard({ image, title, category, price, id, stock }) {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
      addProductToCart({
        id,
        product: {
          imageSrc: image,
          imageAlt: title,
          href: `/Detail/${id}`,
          title,
          price,
          stock
        }
      })
    );
  };

  return (
    <span className="grid justify-center rounded-sm items-center bg-graym w-[380px] h-[550px] mx-[auto] mt-[2%]">
      <span className="justify-center 	" href={`/product/${id}`}>
        <NavLink to={`/products/detail/${id}`}>
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
          <span>
            <span>{category}</span>
          </span>
          <span className="text-[24px]">
            <span>${price}</span>price
          </span>
        </span>
        <span className="font-bebas 	">
          <button
            onClick={handleAddClick}
            className="rounded-none bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none hover:border-transparent"
          >
            Add to Cart
          </button>
        </span>
      </span>
    </span>
  );
}
