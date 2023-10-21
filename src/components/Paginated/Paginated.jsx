import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { FiltersContext } from "../../context/filter";

export function Paginated() {
  const { currentPage, totalPages } = useSelector(
    (state) => state.products
  );
  const { filters, setFilters } = useContext(FiltersContext);
  let elements = [];

  for (let i = 0; i < Number(totalPages); i++) {
    elements.push(
      <button
        key={i}
        onClick={() => setFilters({ ...filters, page: i + 1 })}
        className={
          i + 1 === currentPage
            ? "bg-orangeFred-100 py-[8px] px-[24px] text-blackFred-300 font-bebas rounded-none ml-[8px]"
            : "py-[8px] px-[24px] font-bebas rounded-none ml-[8px]"
        }
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="mt-[25px] mb-[50px]">
      <input
        type="button"
        value="Prev"
        name="Prev"
        className="bg-orangeFred-100 py-[10px] px-[24px] border-orangeFred-300 text-blackFred-300 font-impact rounded-sm ml-[8px]"
        onClick={() => {
          setFilters({ ...filters, page: currentPage - 1 });
        }}
        disabled={currentPage === 1}
      />

      {elements}

      <input
        type="button"
        value="Next"
        name="Next"
        className="bg-orangeFred-100 py-[10px] px-[24px] border-orangeFred-300 text-blackFred-300 font-impact rounded-sm ml-[8px]"
        onClick={() => {
          setFilters({ ...filters, page: currentPage + 1 });
        }}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}
