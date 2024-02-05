import { useState } from "react";

const useVisibility = () => {
  const [visibility, setVisibility] = useState("visible");
  const handleVisibility = () => {
    setVisibility(current => current === "visible" ? "invisible" : "visible");
  };

  return { visibility, handleVisibility };
}

export default useVisibility;