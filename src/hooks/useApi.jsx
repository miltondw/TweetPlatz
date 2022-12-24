import { useEffect, useState } from "react";

export const UseApi = (URL_API) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${URL_API}/6`);
        const data = await res.json();
        setData(data);
        setLoading(false);
      })();
    } catch (error) {
      setError(error);
    }
  }, []);
  return { data, error, loading };
};
