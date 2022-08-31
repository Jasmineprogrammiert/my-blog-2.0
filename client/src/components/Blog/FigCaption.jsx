import { useLocation } from 'react-router';
import useFetch from "../../hooks/useFetch"

const FigCaption = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data: blog } = useFetch('/blogs/' + path);

  return (
    <>
    {blog.figcaption && blog.figcaption.slice(0, 8).map((fig, fig_index) => 
      <span key={fig_index}>
        <figcaption>{fig}</figcaption>
      </span>
      // <figcaption key={fig_index}>{fig}</figcaption>
    )}
    </>
  )
}

export default FigCaption;