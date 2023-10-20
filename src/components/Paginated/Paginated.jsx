import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { FiltersContext } from "../../context/filter";

export function Paginated() {
    const { currentPage, totalPages } = useSelector(
        (state) => state.products
      );
    const { filters, setFilters } = useContext(FiltersContext)
    let elements = [];

    {
        for (let i = 0; i < Number(totalPages); i++) {
          elements.push(
            <button
              key={i}
              onClick={() => setFilters({...filters, page: i + 1})}
              className={i + 1 === currentPage ? "active" : ""}
            >
              {i + 1}
            </button>
          );
        }
      }

    return <>
    <div className="mt-[200px]">
        <input
          type="button"
          value="Prev"
          name="Prev"
          onClick={() => {
            setFilters({...filters, page: currentPage - 1});
          }}
          disabled={currentPage === 1}
        />

        {elements}

        <input
          type="button"
          value="Next"
          name="Next"
          onClick={() => {
            setFilters({...filters, page: currentPage + 1});
          }}
          disabled={currentPage === totalPages}
        />
      </div>
    </>
}