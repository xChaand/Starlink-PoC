<template>
  <div class="row justify-end col-4">
    <q-select
      outlined
      dense
      color="accent"
      v-model="selectedOption"
      @update:model-value="$emit('updateFilter', $event)"
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
import { Filter } from 'components/models';

export default defineComponent({
  name: 'FilterComponent',
  emits: ['updateFilter'],
  setup() {
    const priceRange = ref({ min: 0, max: 9000 });
    const selectedOption = ref<Filter>(Filter.Featured);
    const options: Filter[] = [Filter.Featured, Filter.High, Filter.Low, Filter.New];
    return {
      selectedOption,
      options,
      priceRange,
    };
  },
});
</script>

<style scoped></style>
