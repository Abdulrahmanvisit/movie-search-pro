import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError('');
      setData(null);

      try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.Response === 'True') {
          setData(result);
        } else {
          setError(result.Error);
        }
      } catch {
        setError('Something went wrong. please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch