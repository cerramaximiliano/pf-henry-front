import React from "react";
import { useState } from "react";
import { getProductName } from "../../redux/products/productsActions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const searchProduct = () => {
    dispatch(getProductName(name));
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={handleChange}
        type="search"
        placeholder="Enter a product"
        className="border-2 placeholder:bg-transparent border-gray-300  h-10 px-5 pr-16 rounded-lg text-white-300 hover: hover:text-darkorange rounded-md px-3 py-2 text-sm font-medium"
      />

      <button onClick={searchProduct}>
        <svg
          className="text-darkorange h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px" 
          width="512px"
          height="512px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: 'new 0 0 56.966 56.966' }}
          xmlSpace="preserve"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg></button>
    </div>
  );
}
