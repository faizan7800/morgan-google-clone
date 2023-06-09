import { useEffect, useState } from "react";
const useGoogle = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customersearch/v1?key=AIzaSyA1jGyI6su63vKLfnUaFawGU5DAQwichBM&cx=36be139dc10be4f7b&q=Howard`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, [term]);
  return { data };
};

export default useGoogle;
