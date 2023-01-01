const useContainerVariants = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: .5, duration: .8 }
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' }
    }
  };
  
  return { containerVariants };
}

export default useContainerVariants;