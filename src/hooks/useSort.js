import React, { useState, useMemo } from "react";
import { sortDirections } from "../constants";

export const useSort = (list) => {
  const { ASC, DESC, DEFAULT } = sortDirections;

  const [sortInfo, setSortInfo] = useState({
    key: "firstName",
    direction: DEFAULT,
  });

  const handleSort = ({ target: { id } }) => {
    const sortObj = {
      key: id,
      direction: ASC,
    };

    const { key, direction } = sortInfo;

    const assignDirection = (dir) => {
      sortObj.direction = dir;
    };

    if (id === key) {
      direction === ASC
        ? assignDirection(DESC)
        : direction === DESC && assignDirection(DEFAULT);
    }
    setSortInfo(sortObj);
  };

  const sortedList = useMemo(() => {
    return Object.values(list).sort((a, b) => {
      if (sortInfo.direction !== DEFAULT) {
        if (a[sortInfo.key] < b[sortInfo.key]) {
          return sortInfo.direction === ASC ? -1 : 1;
        }
        return sortInfo.direction === ASC ? 1 : -1;
      }
      return 0;
    });
  }, [list, sortInfo]);

  return { sortInfo, handleSort, sortedList };
};
