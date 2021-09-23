import { useEffect, useRef } from "react";

export default function useRef_1() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}
