import { useEffect, useState } from 'react'

// Use in conjunction with generics so in case the input isn't of type string (most common one) you still get static typing by specifying the generic or by letting the TS compiler infer it
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
