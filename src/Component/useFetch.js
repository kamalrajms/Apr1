import { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);

        // if (!response.ok) {
        //   throw new Error("error");
        // }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [url]);

  return { data, error, loading };
}
export default useFetch;
