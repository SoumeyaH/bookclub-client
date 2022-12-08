import { useState, useEffect } from "react";
import PaperBackground from "../../components/PaperBackground";
import "./styles.css";

const HomePage = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <div className="titles-container">
        <h1>website title</h1>
        <h2>sub title</h2>
      </div>
      <div className="background-container">
        {isDesktop && <PaperBackground />}
      </div>
    </>
  );
};

export default HomePage;
