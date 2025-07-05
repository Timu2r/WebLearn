import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import NameThame from "../NameTheme.js"; 

export default function ArrowNavigator() {
  const navigate = useNavigate();
  const location = useLocation();

  const steps = NameThame.map((item) => item.path);

  const currentIndex = steps.indexOf(location.pathname);
  const nextStep = steps[currentIndex + 1];
  const prevStep = steps[currentIndex - 1];

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

  return (
    <>
      {prevStep && (
        <div className="arrow-container">
          <div className="arrow-wrapper">
            <IoIosArrowBack className="arrow-back" onClick={() => navigate(prevStep)} />
            <p className="tooltip-back">Назад (Ctrl + <IoIosArrowRoundBack />)</p>
          </div>
        </div>
      )}

      {nextStep && (
        <div className="arrow-container">
          <div className="arrow-wrapper">
            <IoIosArrowForward className="arrow-next" onClick={() => navigate(nextStep)} />
            <p className="tooltip-next">Вперёд (Ctrl + <IoIosArrowRoundForward />)</p>
          </div>
        </div>
      )}
    </>
  );
}
