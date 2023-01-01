const useContainerVariants = () => {
  const ContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: .5, duration: .8 }
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut'}
    }
  };
  
  return { ContainerVariants };
}

export default useContainerVariants;