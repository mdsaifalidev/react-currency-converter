import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  const fetchCurrencyInfo = async () => {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${currency}`
    );
    const result = await response.json();
    setData(result["rates"]);
  };

  useEffect(() => {
    fetchCurrencyInfo();
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
