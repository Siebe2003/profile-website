"use client"

import { useEffect, useState } from "react"

function useBreakpoint(breakpoint: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl") {
  const [isAtBreakpoint, setIsAtBreakpoint] = useState(true)

  useEffect(() => {
    const rootElement = document.documentElement

    // 2. Fetch all computed styles for that element
    const computedStyles = getComputedStyle(rootElement)

    // 3. Extract the exact color variable string and trim whitespace
    const breakpointXl = computedStyles.getPropertyValue(`--breakpoint-${breakpoint}`).trim()

    // Match Tailwind"s "2xl" breakpoint: 1536px
    const mediaQuery = window.matchMedia(`(min-width: ${breakpointXl})`)
    
    // Set initial value
    setIsAtBreakpoint(mediaQuery.matches)

    // Listener to update state on resize
    const handleResize = (e: MediaQueryListEvent) => {
      setIsAtBreakpoint(e.matches)
    }

    mediaQuery.addEventListener("change", handleResize)
    console.log(breakpointXl)
    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [breakpoint])

  return isAtBreakpoint
}

export default useBreakpoint
