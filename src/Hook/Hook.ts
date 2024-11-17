import { useState, useEffect } from "react";

// Define the type for the return value of the hook
interface UseSpacingResult {
  screenWidth: number;
  dynamicPaddingLeft: number;
}

const useSpacing = (baseWidth: number = 1232): UseSpacingResult => {
  // Initialize state with a number, representing the screen width
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize(); // Initialize with the current screen width

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate dynamic padding left based on the screen width and base width
  const dynamicPaddingLeft = Math.max(0, (screenWidth - baseWidth) / 2);

  return { screenWidth, dynamicPaddingLeft };
};

export default useSpacing;
