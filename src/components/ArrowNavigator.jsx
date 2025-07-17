import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import NameThame from "../NameTheme.js";

export default function ArrowNavigator() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const steps = NameThame.map((item) => item.path);
  const currentIndex = steps.indexOf(location.pathname);
  const nextStep = steps[currentIndex + 1];
  const prevStep = steps[currentIndex - 1];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "ArrowRight" && nextStep) {
        event.preventDefault();
        navigate(nextStep);
      }
      if (event.ctrlKey && event.key === "ArrowLeft" && prevStep) {
        event.preventDefault();
        navigate(prevStep);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate, nextStep, prevStep]);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  if (isMobile) {
    return (
      <div className="mobile-navigator">
        <button 
          className="mobile-toggle-button"
          onClick={toggleControls}
          aria-label="Toggle navigation"
        >
          <div className="toggle-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {showControls && (
          <div className="mobile-controls-container">
            {prevStep && (
              <button 
                className="mobile-nav-button prev-button"
                onClick={() => {
                  navigate(prevStep);
                  setShowControls(false);
                }}
                aria-label="Previous page"
              >
                <IoIosArrowBack className="arrow-icon" />
              </button>
            )}
            
            {nextStep && (
              <button 
                className="mobile-nav-button next-button"
                onClick={() => {
                  navigate(nextStep);
                  setShowControls(false);
                }}
                aria-label="Next page"
              >
                <IoIosArrowForward className="arrow-icon" />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="arrow-navigator">
      {prevStep && (
        <button 
          className="nav-button prev-button"
          onClick={() => navigate(prevStep)}
          aria-label="Previous page"
        >
          <IoIosArrowBack className="arrow-icon" />
        </button>
      )}

      {nextStep && (
        <button 
          className="nav-button next-button"
          onClick={() => navigate(nextStep)}
          aria-label="Next page"
        >
          <IoIosArrowForward className="arrow-icon" />
        </button>
      )}
    </div>
  );
}