import { useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

/* 
  targetRef.current に要素が存在し、isScrollLocked が true のとき
  スクロールを停止する 
*/
const useScrollLock = ({ isScrollLocked }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current === null) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isScrollLocked) {
      disableBodyScroll(targetRef.current);
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      enableBodyScroll(targetRef.current);
      document.body.style.paddingRight = "";
    }

    return () => {
      clearAllBodyScrollLocks();
      document.body.style.paddingRight = "";
    };
  }, [isScrollLocked, targetRef]);

  return { targetRef };
};

export default useScrollLock;
