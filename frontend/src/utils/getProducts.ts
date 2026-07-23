import localDB from '../../productsdb.json';
import { BASE_URL } from './constant';

export async function getProducts(): Promise<any[]> {
  if (BASE_URL) {
    try {
      const res = await fetch(`${BASE_URL}/products`, { cache: 'no-store' });
      if (res.ok) return await res.json();
    } catch {
      // fall through to local data
    }
  }
  return (localDB as any).products ?? [];
}

export async function getProductById(id: string): Promise<any | null> {
  if (BASE_URL) {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        cache: 'no-store',
      });
      if (res.ok) return await res.json();
    } catch {
      // fall through to local data
    }
  }
  const list = (localDB as any).products ?? [];
  return list.find((p: any) => String(p.id) === String(id)) ?? null;
}
