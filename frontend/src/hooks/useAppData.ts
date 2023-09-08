import { useState, useEffect } from 'react';
import { baseUrl } from '@/constant';

export function useAppData() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/products`);
        const data = await res.json();
        if (data && data[0] && data[0].collections) {
          setProductsData(data[0].collections);
        }
      } catch (error) {
        console.error('Error fetching product data', error);
      }
    };

    fetchData();
  }, []);

  const filterProducts = (query: string) => {
    return productsData.filter((product: any) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    productsData,
    filterProducts,
  };
}
