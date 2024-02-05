const useContainerVariants = () => {
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: "100vw" 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", delay: .5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" }
    }
  };
  
  return { containerVariants };
}

export default useContainerVariants;