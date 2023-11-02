import { useState, useEffect } from "react";
import axiosInstance from "../config/axiosConfig";

const useApi = (url: any, method: any, body: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          url,
          method,
          data: body,
        };

        const response = await axiosInstance().request(config);

        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
};

export default useApi;
