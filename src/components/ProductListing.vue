<template>
  <div class="q-px-xl">
    <div class="row justify-between items-center q-pa-sm">
      <h3 class="text-weight-medium no-margin">{{ title }}</h3>
      <FilterComponent @updateFilter="filterOption" />
    </div>
    <div class="row justify-around q-px-md">
      <ProductCards :products="filteredProducts" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import ProductCards from 'components/ProductCards.vue';
import FilterComponent from 'components/FilterComponent.vue';
import { type IProduct, Filter } from 'components/models';
import { useProductStore } from 'src/stores/products.store';

export default defineComponent({
  name: 'ProductListing',
  components: { ProductCards, FilterComponent },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useProductStore();
    const filteredProducts = ref<IProduct[]>([]);
    const products = computed(() => store.products);

    function filterOption(option: Filter): void {
      switch (option) {
        case Filter.Featured:
          filteredProducts.value = products.value;
          break;
        case Filter.High:
          filteredProducts.value = products.value.toSorted((a, b) => b.price - a.price);
          break;
        case Filter.Low:
          filteredProducts.value = products.value.toSorted((a, b) => a.price - b.price);
          break;
        case Filter.New:
          filteredProducts.value = products.value.filter((product) => product.new);
          break;
      }
    }

    onMounted(async () => {
      await store.fetchProducts();
      console.log(store.products);
      // filterOption(Filter.Featured);
    });

    watch(products, () => {
      filterOption(Filter.Featured);
    });

    return { filteredProducts, filterOption };
  },
});
</script>
