import { useState } from "react";

const fetchDataFromApi = async () => {
  const response = await fetch("https://tenpo2.free.beeceptor.com/tenpo");

  return response.json();
};

const useAsyncWithRetry = (retryCount = 3) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [data, setData] = useState(null);

  const [retryAttempts, setRetryAttempts] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    setError(null);

    try {
      const shouldFail = Math.random() < 0.2; // 20% chance of failure

      if (shouldFail && retryAttempts < retryCount) {
        throw new Error("Simulated async error");
      }

      const response = await fetchDataFromApi();

      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const retry = () => {
    setRetryAttempts(retryAttempts + 1);
  };

  return { loading, error, data, retry, fetchData };
};

export default useAsyncWithRetry;
