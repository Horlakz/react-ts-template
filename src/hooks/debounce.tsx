import { useCallback, useEffect, useRef, useState } from "react";

function valueEquality<T>(left: T, right: T): boolean {
  return left === right;
}
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const previousValue = useRef(value);

  const updateDebouncedValue = useCallback(() => {
    if (!valueEquality(previousValue.current, value)) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
        previousValue.current = value;
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [value, delay]);

  useEffect(() => {
    const cleanup = updateDebouncedValue();
    return cleanup;
  }, [updateDebouncedValue]);

  return debouncedValue;
}
