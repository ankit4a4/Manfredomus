// components/GoogleReviews.js
import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    // Only add script if not already added
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = "elfsight-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="elfsight-app-e913a354-f9f5-4426-a067-fdabd09dfdb8"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default GoogleReviews;
