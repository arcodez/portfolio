import { useState, useEffect, useRef } from "react";

export default function useHover() {
    // Reference to the element we're listen for events from
    const ref = useRef();
  
    // Hover state management
    const [hovered, setHovered] = useState(false);
  
    // Event handlers
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
  
    // Simple effect, just bind and unbind the event handlers
    useEffect(() => {
      // ref.current.addEventListener("mouseenter", enter);
      /*  ref.current.addEventListener("mouseleave", leave); */
      return () => {
    /*     ref.current.removeEventListener("mouseenter", enter);
        ref.current.removeEventListener("mouseleave", leave); */
      };
    }, [ref]);
  
    return [ref, hovered];
  }