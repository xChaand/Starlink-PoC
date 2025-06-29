<template>
  <div class="row justify-end col-4">
    <q-select
      outlined
      dense
      color="accent"
      v-model="model"
      :options="options"
      label="Sort by"
      class="q-mr-sm"
    />
    <q-btn-dropdown dense unelevated label="price range">
      <q-item>
        <div class="q-pa-md">
          <q-badge color="secondary">
            Model: {{ priceRange.min }} to {{ priceRange.max }} (0 to 20,000)
          </q-badge>
          <q-range markers v-model="priceRange" :min="0" :max="20000" color="accent" /></div
      ></q-item>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FilterComponent',
  setup() {
    const priceRange = ref({ min: 0, max: 9000 });
    return {
      model: ref('Featured'),
      options: ['Featured', 'Price: High to low', 'Price: Low to high', 'Newest'],
      priceRange,
    };
  },
});
</script>

<style scoped></style>
