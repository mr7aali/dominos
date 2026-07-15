"use client";

import { useEffect } from "react";

let activeLocks = 0;

export function useBodyScrollLock(isLocked: boolean, lockClassName: string) {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    activeLocks += 1;

    document.body.classList.add(lockClassName);
    document.body.classList.add("modal-scroll-lock");

    return () => {
      activeLocks = Math.max(0, activeLocks - 1);
      document.body.classList.remove(lockClassName);

      if (activeLocks === 0) {
        document.body.classList.remove("modal-scroll-lock");
      }
    };
  }, [isLocked, lockClassName]);
}
