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
import { defineComponent, onMounted, ref, type PropType } from 'vue';
import ProductCards from 'components/ProductCards.vue';
import FilterComponent from 'components/FilterComponent.vue';
import { type IProduct, Filter } from 'components/models';

export default defineComponent({
  name: 'ProductListing',
  components: { ProductCards, FilterComponent },
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array as PropType<IProduct[]>,
      required: true,
    },
  },
  setup(props) {
    const filteredProducts = ref<IProduct[]>([]);

    function filterOption(option: Filter): void {
      switch (option) {
        case Filter.Featured:
          filteredProducts.value = props.products;
          break;
        case Filter.High:
          filteredProducts.value = props.products.toSorted((a, b) => b.price - a.price);
          break;
        case Filter.Low:
          filteredProducts.value = props.products.toSorted((a, b) => a.price - b.price);
          break;
        case Filter.New:
          filteredProducts.value = props.products.filter((product) => product.new);
          break;
      }
    }

    onMounted(() => {
      filterOption(Filter.Featured);
    });

    return { filteredProducts, filterOption };
  },
});
</script>
