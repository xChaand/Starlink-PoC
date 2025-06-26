<template>
  <q-input
    dense
    color="accent"
    clearable
    clear-icon="clear"
    outlined
    v-model="text"
    input-class="text-right"
  >
    <template v-slot:append>
      <q-icon v-if="!text" name="search" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const text = ref('');
    return { text };
  },
});
</script>
