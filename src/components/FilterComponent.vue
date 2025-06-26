<template>
  <div class="row justify-end col-4">
    <q-select outlined v-model="model" :options="options" label="Outlined" class="col-grow" />
    <q-btn-dropdown label="price range" dense class="col-auto"></q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FilterComponent',
  setup() {
    return {
      model: ref('null'),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
    };
  },
});
</script>

<style scoped></style>
