import { useLocation } from 'react-router-dom';

const useGetURLSearch = (key: string | string[]): string | null | { [key: string]: string | null } => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  if (typeof key === 'string') {
    return searchParams.get(key);
  } else {
    const values: { [key: string]: string | null } = {};
    key.forEach(k => {
      values[k] = searchParams.get(k);
    });
    return values;
  }
};

export default useGetURLSearch;