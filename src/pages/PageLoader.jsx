import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(document.readyState != "complete");

  useEffect(() => {

    function handleReadyStateChange() {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    }

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      setTimeout(() => setLoading(true), 300);
      document.addEventListener("readystatechange", handleReadyStateChange);
    }

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };

  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}
