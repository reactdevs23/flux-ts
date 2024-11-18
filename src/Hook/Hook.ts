import { useState, useEffect, useRef } from "react";

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

export const useScrollVisibility = (
  setShowGenerateButton: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const generateButtonRef = useRef<HTMLButtonElement | null>(null);
  const checkVisibility = () => {
    if (generateButtonRef.current) {
      const rect = generateButtonRef.current.getBoundingClientRect();
      const navbarHeight = 70; // Adjust according to your navbar's actual height
      const offset = navbarHeight + 10; // Add extra margin for better control
      const isInView =
        rect.top >= offset && rect.bottom <= window.innerHeight - offset;
      setShowGenerateButton(!isInView); // Show button only when out of view
    }
  };

  useEffect(() => {
    // Check visibility on initial render (before scrolling)
    checkVisibility();

    // Handle scrolling event
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowGenerateButton]);

  return generateButtonRef;
};
