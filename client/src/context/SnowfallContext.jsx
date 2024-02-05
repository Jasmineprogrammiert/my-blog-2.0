import Snowfall from "react-snowfall";
import "../assets/style/snowfall.css";

export const SnowfallContext = ({ children }) => {
  return (
    <>
    <div className="snowfall-container">
      <Snowfall 
        snowflakeCount={150} // number of snowflakes to render (default 150)
        color="lightblue"
        minSpeed={0}
        maxSpeed={.5}
        minWind={-1} // Minimum wind value for horizontal movement
        maxWind={1.5}
        minSize={.5}
        maxSize={3.5}
      />
      {children}
    </div>

    
    </>
  );
}