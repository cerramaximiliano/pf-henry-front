import { useDispatch, useSelector } from "react-redux";
import { getProductFiltered, createQuery, searchName } from "../../redux/products/productsActions";
import React, { useState, useEffect } from "react";

export default function Filtered() {
  const dispatch = useDispatch();
  // const { query } = useSelector((state) => (state.products))

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setQuery((prevQuery) => {
  //     return `${prevQuery}&${[name]}=${value}`
  //   });
  // };

  // const handleReset = () => {
  //   setQuery(""); // Restablecer el estado query
  // };
  const { searchByName } = useSelector((state) => (state.products))
  const [filters, setFilters] = useState({
    title: "",
    price: "",
    category: "",
    diet: "",
    weightType: "",
    weightMin: "",
    weightMax: "",
  });

  useEffect(() => {
    console.log('query' + searchByName);
    dispatch(getProductFiltered(applyFilters(filters) + searchByName));
  }, [filters, dispatch]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      title: "",
      category: "",
      price:"",
      diet: "",
      weightType: "",
      weightMin: "",
      weightMax: "",

    });
    dispatch(createQuery(''))
    dispatch(searchName(''))
    dispatch(getProductFiltered(''))
  };

  const applyFilters = () => {
    const newQuery = Object.entries(filters)
      .map(([key, value]) => {
        if (value) {
          return `${key}=${value}`;
        }
        return "";
      })
      .filter(Boolean)
      .join("&");
      dispatch(createQuery(newQuery))
      return newQuery;
  };

  return (
    <div className="fixed top-[55vh] left-[5%] transform -translate-y-1/2 p-5 shadow-md bg-[#373737] text-white font-bebas w-[300px]	">
      <span className="">
        <h2 className=" mb-[10px] mt-[15px] text-left	" >Sort by:</h2>
        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Name</h3>
          <select name="orderBy" onChange={handleChange} defaultValue="Default" className=" w-[280px] h-[35px]">
            <option value="Default">-----</option>
            <option value="title">A - Z</option>
            <option value="-title">Z - A</option>
          </select>
        </div>
        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Price</h3>
          <select name="orderBy" onChange={handleChange} defaultValue="Default" className=" w-[280px] h-[35px] ">
            <option value="Default">-----</option>
            <option value="-price">Maximum</option>
            <option value="price">Minimum</option>
          </select>
        </div>
      </span>
      <span> 
        <h2 className="mb-[10px] mt-[35px] text-left">Filter:</h2>            
        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Category</h3>
          <select
            name="category"
            onChange={handleChange}
            defaultValue="Default"
            className=" w-[280px] h-[35px] "
          >
            <option value="Default">All</option>
            <option value="food">Food</option>
            <option value="suplements">Suplements</option>
            <option value="beverages">Beverages</option>
            <option value="vitamins and minerals">Nutrients</option>
          </select>
        </div>

        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Diet</h3>
          <select name="diet" onChange={handleChange} defaultValue="Default" className=" w-[280px] h-[35px] ">
            <option value="Default">All</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="unespecified">unespecified</option>
          </select>
        </div>

        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">WeightType</h3>
          <select
            name="weightType"
            onChange={handleChange}
            defaultValue="Default"
            className=" w-[280px] h-[35px] "
          >
            <option value="Default">All</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
          </select>
        </div>

        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Size</h3>
          <span className="flex space-x-[10px]">            
            <input
              name="weightMin"
              onChange={handleChange}
              id="weightMix"
              type="number"
              placeholder="Min"
              className=" w-[128px] h-[35px] "
              />
            <input
              name="weightMax"
              onChange={handleChange}
              id="weightMax"
              type="number"
              placeholder="Max"
              className=" w-[128px] h-[35px] "
              />
            </span>
        </div>
      </span>
      <button onClick={handleReset} className="rounded-none	my-[25px] bg-[#ff9505] text-[#121212] py-[8px] px-[24px] outline-none hover:border-transparent	"> Reset</button>
    </div>
  );
}


/* import { useDispatch } from "react-redux";
import { getProductFiltered } from "../../redux/products/productsActions";
import React, { useState } from "react";
export default function Filtered() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(" ");
    useEffect(() => {
      // Cuando query cambia, envía la solicitud de filtrado al servidor
      dispatch(getProductFiltered(query));
    }, [query, dispatch]);

  const handleAoZ = async (event, query) => {
    const { name, value } = event.target;
    console.log("query1" + query);
    console.log(name, value);
    setQuery(value);
    dispatch(getProductFiltered(query));      

  };

  const handleOrderPrice = (event) => {
    setQuery(query + "&price=" + event.target.value);
    dispatch(getProductFiltered(query));
  };

  const handleFilterDiet = (event) => {
    setQuery(query + "&diet=" + event.target.value);
    dispatch(getProductFiltered(query));
  };

  const handleFilterCategory = (event) => {
    setQuery(query + "&category=" + event.target.value);
    dispatch(getProductFiltered(query));
  };
  const handleWeightType = (event) => {
    setQuery(query + "&weightType=" + event.target.value);
    dispatch(getProductFiltered(query));
  };
  const handleWeightMax = (event) => {
    setQuery(query + "&weightMax=" + event.target.value);
    dispatch(getProductFiltered(query));
  };
  const handleWeightMin = (event) => {
    setQuery(query + "&weightMin=" + event.target.value);
    dispatch(getProductFiltered(query));
  };

  const handleReset = () => {
    setQuery("");
    dispatch(getProductFiltered());
  };

  return (
    <div>
      <div>
        <h3>Alphabetic</h3>
        <select name="title" onChange={handleAoZ} defaultValue="Default">
          <option value="Default">Select Order</option>
          <option value="title">A - Z</option>
          <option value="-title">Z - A</option>
        </select>
      </div>

      <div>
        <h3>Price</h3>
        <select name="price" onChange={handleOrderPrice} defaultValue="Default">
          <option value="Default">Select Price</option>
          <option value="price">Maximum</option>
          <option value="-price">Minimum</option>
        </select>
      </div>

      <div>
        <h3>Category</h3>
        <select
          name="category"
          onChange={handleFilterCategory}
          defaultValue="Default"
        >
          <option value="Default">Select Category</option>
          <option value="food">Food</option>
          <option value="suplements">suplements</option>
          <option value="beverages">beverages</option>
          <option value="vitamins and minerals">vitamins and minerals</option>
        </select>
      </div>

      <div>
        <h3>Diet</h3>
        <select name="diet" onChange={handleFilterDiet} defaultValue="Default">
          <option value="Default">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="unespecified">unespecified</option>
        </select>
      </div>

      <div>
        <h3>weightType</h3>
        <select
          name="weightType"
          onChange={handleWeightType}
          defaultValue="Default"
        >
          <option value="Default">Select a Weight Type</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </div>

      <div>
        <h3>min-max size</h3>
        <input
          name="weightMin"
          onChange={handleWeightMin}
          id="weightMix"
          type="number"
          placeholder="Minimum"
        />
        <input
          name="weightMax"
          onChange={handleWeightMax}
          id="weightMax"
          type="number"
          placeholder="maximum"
        />
      </div>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
}
 */
