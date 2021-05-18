import React, { useEffect, useState } from "react";

const useInfiniteScroll = () => {
  const [listLimit, setListLimit] = useState(10);

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

export default useInfiniteScroll;
