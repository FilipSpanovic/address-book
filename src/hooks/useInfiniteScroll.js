import { useEffect, useState } from "react";

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
    const nextListElements = 10;

    if (bottom) {
      setListLimit((prevState) => prevState + nextListElements);
    }
  };
  return {
    listLimit,
  };
};
