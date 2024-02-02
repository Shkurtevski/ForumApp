import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const AnimationSpinner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./preLoader.json"),
      });

      // Remove the animation after 3 seconds
      const timeout = setTimeout(() => {
        animation.destroy();
      }, 5000);

      // Cleanup function to clear the timeout and destroy the animation
      return () => {
        clearTimeout(timeout);
        animation.destroy();
      };
    }
  }, []);

  return (
    <div
      className="container"
      ref={containerRef}
      style={{
        position: "fixed",
        height: "100vh",
        backgroundColor: "#303030",
        textAlign: "center",
      }}
    ></div>
  );
};

export default AnimationSpinner;
