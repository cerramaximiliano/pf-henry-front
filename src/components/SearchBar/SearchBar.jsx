import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiltersContext } from "../../context/filter";


export default function SearchBar() {
  const navigate = useNavigate();
  const { filters, setFilters } = useContext(FiltersContext);
  const location = useLocation();
  const path = location.pathname;
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleChange = (event) => {
    setFilters({ name: event.target.value });
  };

  const searchProduct = () => {
    if (filters.name.trim() === "") alert("Name should be a non-empty string");
    if (path === "/home") navigate("/products");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && filters.name.trim() !== "") {
      searchProduct();
    }
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  return (
    <div className="relative">
    <div className={`transition-all duration-300 ${isSearchOpen ? 'w-[300px]' : 'w-10'}`}>
      <input
        value={filters.name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        type="search"
        placeholder="Enter a product"
        className="border-2 w-full bg-graym border-orangeFred-100 h-10  text-orangeFred-100 hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
      />
    </div>
    <Link to="/products" onClick={toggleSearchBar}>
      <svg
        className="absolute top-0 right-0 my-3 mx-3 cursor-pointer hover:text-orangeFred-100 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 56.966 56.966"
        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
        xmlSpace="preserve"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
    </Link>
  </div>
  );
}

//{isCartOpen && <Cart />} {/* Renderizamos el componente Cart solo si isCartOpen es true */
