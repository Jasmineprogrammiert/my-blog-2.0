import usePath from '../../hooks/usePath';
import useFetch from '../../hooks/useFetch';

const FigCaption = () => {
  const { path } = usePath();
  const { data: blog } = useFetch('/blogs/' + path);

  return (
    <>
    {blog.figcaption && blog.figcaption.slice(0, 8).map((fig, index) => 
      <figcaption key={index}>{fig}</figcaption>
    )}
    </>
  )
}

export default FigCaption;