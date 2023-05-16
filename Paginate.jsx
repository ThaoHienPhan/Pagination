import React, { useState } from "react";
import PropTypes from "prop-types";
import Items from "./Items";
import ReactPaginate from "react-paginate";

Paginate.propTypes = {};

function Paginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);
  const pageCount = 10;
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Items currentItems={currentItems} />
      <div>
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Previous"
          pageClassName="flex justify-center items-center w-10 h-10 hover:bg-gray-100"
          pageLinkClassName=""
          previousClassName="w-28 border-r flex justify-center items-center text-gray-950 font-semibold"
          previousLinkClassName=""
          nextClassName="w-28 border-l flex justify-center items-center text-gray-950 font-semibold "
          nextLinkClassName=""
          disabledClassName="text-gray-400"
          breakLabel="..."
          breakClassName="w-[35px] h-[34px] m-auto"
          breakLinkClassName=""
          containerClassName="w-[29rem]	m-auto flex pl-0 text-gray-500 border rounded-lg shadow-md"
          activeClassName="text-gray-950 border border-slate-800  font-semibold"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Paginate;
