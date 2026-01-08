import { useState, useEffect } from 'react';

export const useFetchNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/noticias-data.json')
      .then(response => response.json())
      .then(data => {
        setNoticias(data.noticias);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { noticias, loading, error };
};
