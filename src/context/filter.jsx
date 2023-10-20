import { createContext, useState } from "react";

export const FiltersContext = createContext()

export default function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        orderBy: "",
        category: "",
        diet: "",
        weightType: "",
        weightMin: "",
        weightMax: "",
        page: 1,
        name: "",
        priceMin: "",
        priceMax: "",
      });

      

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
         {children}
        </FiltersContext.Provider>
    )
}