<template>
  <div class="row">
    <q-card v-for="product in products" :key="product.id" class="col-3">
      <q-img :src="product.img" />
      <q-separator inset />
      <div class="col">
        <q-card-section>
          <div class="overflow-2 q-mb-sm">{{ product.name }}</div>
          <div class="text-subtitle2 text-bold">{{ product.price }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn icon-right="info" dense label="info" />
          <q-btn icon-right="add" dense label="add" />
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { IProduct } from 'components/models.ts';

export default defineComponent({
  name: 'ProductCards',
  props: {
    products: {
      type: Array as PropType<IProduct[]>,
      required: true,
    },
  },
});
</script>
