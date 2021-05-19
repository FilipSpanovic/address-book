import React, { useState } from "react";

export const useTableSort = (list) => {
  const [sortData, setSortData] = useState({
    key: "firstName",
    direction: "default",
  });

  const handleSort = ({ target: { id } }) => {
    if (id === sortData.key) {
      if (sortData.direction === "asc") {
        setSortData({ key: id, direction: "desc" });
        return;
      }
      if (sortData.direction === "desc") {
        setSortData({ key: id, direction: "default" });
        return;
      }
    }
    return setSortData({ key: id, direction: "asc" });
  };

  return { sortData, handleSort };
};
