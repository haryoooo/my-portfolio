import { useEffect } from "react";

export function useOutsideClick(
  menuRef: React.RefObject<HTMLElement>,
  callback: () => void,
  buttonRef?: React.RefObject<HTMLElement> // Optional button ref
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef?.current &&
        !menuRef?.current.contains(event.target as Node) &&
        (!buttonRef || !buttonRef.current || !buttonRef.current.contains(event.target as Node))
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef, callback, buttonRef]);
}
