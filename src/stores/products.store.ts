import { defineStore } from 'pinia';
import { type IProduct } from 'components/models';
import { ref } from 'vue';

export const useProductStore = defineStore('products', () => {
  const products = ref<IProduct[]>([]);
  const loading = ref(false);

  async function fetchProducts() {
    loading.value = true;
    try {
      const response = await fetch('/data.json');
      const data: IProduct[] = await response.json();
      products.value = data;
    } catch (err: unknown) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }
  return { products, loading, fetchProducts };
});
