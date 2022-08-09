import fish from '../../assets/img/fish-01.png';

const EmptyList = () => {
  return (
   <>
   <div className="emptyList">
    <img src={fish} alt="chinese fish" />
    <p>No results found</p>
   </div>
   </>
  )
}

export default EmptyList;