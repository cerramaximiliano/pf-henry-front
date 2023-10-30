import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/Cart/cartActions";

export function Card({ image, title, category, price, id, stock }) {
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
          stock,
        },
      })
    );
  };

  return (
    <span className="grid justify-center rounded-sm items-center pb-4 transition transform hover:scale-110 bg-graym sm:w-[160px] md:w-[250px] lg:w-[350px] xl:w-[350px] sm:h-[300px] md:h-[400px]  lg:h-[500px] xl:h-[500px]  mx-[auto] mt-[2%]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <NavLink to={`/Detail/${id}`}>
            <img
              src={image}
              className="object-contain sm:w-[160px] md:w-[250px] lg:w-[350px] xl:w-[350px] "
              srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
              alt="Product Image"
            />
          </NavLink>
          <NavLink to={`/Detail/${id}`}>
            <div className="text-blackFred-100 hover:text-orangeFred-100  text-left text-20px font-bayon-bold">
              {title}
            </div>
          </NavLink>
          <div className="text-blackFred-100 text-left text-15px  font-impact">
            <span>${price}</span>
          </div>
        </div>
        <div className="flex justify-center mt-[-10px] items-center">
          <button
            onClick={handleAddClick}
            className="rounded-sm bg-redFred-100 text-whiteFred-100  sm:w-[120px] sm:h-[60px] lg:w-[250px] xl:w-[250px] outline-none hover:text-orangeFred-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </span>
  );
}
