import { useState, useEffect } from "react";

export const useApi = ({ url }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error(`API returned ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [url]);

  return { data };
};
