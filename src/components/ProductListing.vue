<template>
  <div class="q-px-xl">
    <div class="row justify-between items-center q-pa-sm">
      <h3 class="text-weight-medium no-margin">{{ title }}</h3>
      <FilterComponent />
    </div>
    <div class="row justify-around q-px-md">
      <ProductCards :products="products" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ProductCards from 'components/ProductCards.vue';
import FilterComponent from 'components/FilterComponent.vue';
import type { IProduct } from 'components/models.ts';

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
});
</script>
