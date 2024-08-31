import { useState, useEffect } from "react";

export default function useFetchProductData() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let ignore = false;

    if (!ignore)
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          if (res.status >= 400)
            throw new Error(
              `Ooops! An error has occurred while retrieving products.`
            );

          return res.json();
        })
        .then((data) => /* console.log(data) */ setProducts(data))
        .catch((err) => setError(err))
        .finally(setLoading(false));
    return () => {
      ignore = true;
    };
  }, []);

  return { products, error, loading };
}
