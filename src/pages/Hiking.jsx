import mountain from '../assets/img/mountain-02.png'

const Hiking = () => {
  return (
    <>
    <div className="hiking-container">
      <h1 className="hiking-heading">Hiking</h1>
      <img 
        className="hiking-img" 
        src={mountain} alt="chinese ink painting mountain" 
      />
    </div>
    </>
  )
}

export default Hiking;
