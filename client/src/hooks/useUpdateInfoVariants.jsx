const useUpdateInfoVariants = () => {
  const updateInfoVariants = {
    hidden: { 
      opacity: 0, 
      x: "100vw" 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", delay: .5 }
    }
  };
  
  return { updateInfoVariants };
}

export default useUpdateInfoVariants;