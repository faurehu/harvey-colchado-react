import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetchNoticias = () => {
  const { data, error, isLoading } = useSWR('/noticias-data.json', fetcher, {
    revalidateOnFocus: false, // Don't refetch on window focus (static data)
    revalidateOnReconnect: false, // Don't refetch on reconnect (static data)
    dedupingInterval: 60000, // Deduplicate requests within 1 minute
  });

  return {
    noticias: data?.noticias || [],
    loading: isLoading,
    error: error || null,
  };
};
