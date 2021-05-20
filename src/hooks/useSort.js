import React, { useState } from "react";

export const useSort = (list) => {
  const [sortInfo, setSortInfo] = useState({
    key: "firstName",
    direction: "default",
  });

  const handleSort = ({ target: { id } }) => {
    if (id === sortInfo.key) {
      if (sortInfo.direction === "asc") {
        setSortInfo({ key: id, direction: "desc" });
        return;
      }
      if (sortInfo.direction === "desc") {
        setSortInfo({ key: id, direction: "default" });
        return;
      }
    }
    return setSortInfo({ key: id, direction: "asc" });
  };

  return { sortInfo, handleSort };
};
