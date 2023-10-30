import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProductToCart } from "../../redux/Cart/cartActions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Card({ image, title, category, price, id, stock }) {
  const dispatch = useDispatch()

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
    )
    toast("product has been add to cart", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  return (
    <span className="grid justify-center rounded-sm items-center pb-4 transition transform hover:scale-110 bg-graym w-[250px] h-[350px] mx-[auto] mt-[2%]">
      <ToastContainer />
      <div className="flex flex-col justify-between h-full">
        <div>
          <NavLink to={`/Detail/${id}`}>
            <img
              src={image}
              className="object-contain h-[250px] w-[220px]"
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
            className="rounded-sm bg-redFred-100 text-whiteFred-100 w-[200px] outline-none hover:text-orangeFred-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </span>
  )
}
