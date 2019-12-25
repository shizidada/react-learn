import { useEffect, useState } from "react";

import { HEAD_HEIGHT } from "../common/contants";

const useScrollMounting = () => {
  let [isShowMounting, setIsShowMounting] = useState(false);
  const handScrollMouting = () => {
    const heightTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsShowMounting(heightTop >= HEAD_HEIGHT);
  };

  useEffect(() => {
    document.addEventListener("scroll", handScrollMouting);

    return () => {
      document.removeEventListener("scroll", handScrollMouting);
    };
  }, []);

  return isShowMounting;
};

export default useScrollMounting;
