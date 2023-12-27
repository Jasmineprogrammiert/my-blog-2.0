import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setData(res.data);
      setIsPending(false);
    };
    fetchData();
  }, [url]);

  return { data, isPending };
}

export default useFetch;