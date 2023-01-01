const useButtonVariants = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgb(255,255,255)",
      boxShadow: "0 0 8px rgb(255,255,255)",
      transition: {
        duration: .35,
        yoyo: Infinity
      }
    }
  };
  
  return { buttonVariants };
}

export default useButtonVariants;