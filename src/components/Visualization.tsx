import React from "react";
import "../styles/Visualization.css";

const Visualization: React.FC = () => {
    return (
        <div className="planet-visualization mt-40">
          <div className="planet-halo"></div>
          <div className="planet-outline"></div>
          <div className="planet-shadow"></div>
        </div>
      );
};

export default Visualization;