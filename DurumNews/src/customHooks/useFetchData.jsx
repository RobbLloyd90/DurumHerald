import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setData(data);
      })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  }, [url]);
  return { data, error };
};

export default useFetchData;
