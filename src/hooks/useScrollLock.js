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
const useScrollLock = ({ isScrollLocked, animationDuration = 0 }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isScrollLocked) {
      disableBodyScroll(targetRef.current);
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const timeoutId = setTimeout(() => {
        enableBodyScroll(targetRef.current);
        document.body.style.paddingRight = "";
      }, animationDuration);

      return () => clearTimeout(timeoutId);;
    }

  }, [isScrollLocked, animationDuration]);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
      document.body.style.paddingRight = "";
    };
  }, []);

  return { targetRef };
};

export default useScrollLock;
