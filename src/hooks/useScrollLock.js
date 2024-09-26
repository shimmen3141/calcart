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

    if (isScrollLocked) {
      disableBodyScroll(targetRef.current);
    } else {
      enableBodyScroll(targetRef.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isScrollLocked, targetRef]);

  return { targetRef };
};

export default useScrollLock;
