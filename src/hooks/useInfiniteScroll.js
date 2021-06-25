import React, { useEffect, useState } from "react";

export const useInfiniteScroll = () => {
  const [listLimit, setListLimit] = useState(20);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = ({ target: { scrollingElement } }) => {
    const { scrollHeight, scrollTop, clientHeight } = scrollingElement;
    const bottom = scrollHeight - scrollTop === clientHeight;
    if (bottom) {
      setListLimit((prevState) => prevState + 10);
    }
  };
  return {
    listLimit,
  };
};
