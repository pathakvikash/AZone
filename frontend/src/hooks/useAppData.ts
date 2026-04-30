import { useState, useEffect } from 'react';
import { BASE_URL } from '@/utils/constant';

export function useAppData() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!BASE_URL) return;
      try {
        const res = await fetch(`${BASE_URL}/products`, { cache: 'no-store' });
        const data = await res.json();
        if (data && data[0] && data[0].collections) {
          setProductsData(data[0].collections);
        }
      } catch (error) {
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
