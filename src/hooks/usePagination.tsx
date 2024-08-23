/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

interface IPaginationHook {
  slicedData: any[];
  pagination: any[];
  // eslint-disable-next-line no-unused-vars
  prevPage: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  nextPage: (e: any) => void;
  changePage: (
    // eslint-disable-next-line no-unused-vars
    page: number,
    // eslint-disable-next-line no-unused-vars
    e: any
  ) => void;
}
// prevPage nextPage changePage can only be assigned to Button Html Element
export const usePagination = (initialState: any): IPaginationHook => {
  const { itemsPerPage, data, startFrom } = initialState;
  const perPage = itemsPerPage || 10;
  const pages = Math.ceil((data?.length ?? (0 as number)) / perPage);
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(
    startFrom <= pages ? startFrom : 1
  );
  const [slicedData, setSlicedData] = useState(
    [...data].slice((currentPage - 1) * perPage, currentPage * perPage)
  );

  useEffect(() => {
    setSlicedData(
      [...data].slice((currentPage - 1) * perPage, currentPage * perPage)
    );
  }, [data, currentPage, perPage]);

  let ellipsisLeft = false;
  let ellipsisRight = false;
  for (let i = 1; i <= pages; i += 1) {
    if (i === currentPage) {
      pagination.push({ id: i, current: true, ellipsis: false });
    } else if (
      i < 2 ||
      i > pages - 1 ||
      i === currentPage - 1 ||
      i === currentPage + 1
    ) {
      pagination.push({ id: i, current: false, ellipsis: false });
    } else if (i > 1 && i < currentPage && !ellipsisLeft) {
      pagination.push({ id: i, current: false, ellipsis: true });
      ellipsisLeft = true;
    } else if (i < pages && i > currentPage && !ellipsisRight) {
      pagination.push({ id: i, current: false, ellipsis: true });
      ellipsisRight = true;
    }
  }

  const changePage = (
    page: number,
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e?.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      setSlicedData([...data].slice((page - 1) * perPage, page * perPage));
    }
  };

  const goToPrevPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPage((prevVal: number) =>
      prevVal - 1 === 0 ? prevVal : prevVal - 1
    );
    if (currentPage !== 1) {
      setSlicedData(
        [...data].slice(
          (currentPage - 2) * perPage,
          (currentPage - 1) * perPage
        )
      );
    }
  };

  const goToNextPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPage((prevVal: number) =>
      prevVal === pages ? prevVal : prevVal + 1
    );
    if (currentPage !== pages) {
      setSlicedData(
        [...data].slice(currentPage * perPage, (currentPage + 1) * perPage)
      );
    }
  };

  return {
    slicedData,
    pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage,
  };
};
