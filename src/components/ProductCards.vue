<template>
  <div class="row">
    <div v-for="product in products" :key="product.id" class="col-3 q-pa-md">
      <q-card flat bordered>
        <q-img :src="product.img" />
        <q-separator inset />
        <div class="col">
          <q-card-section>
            <p class="overflow-2 q-mb-sm">{{ product.name }}</p>
            <p class="text-subtitle2 text-bold no-margin">{{ product.price }} QAR</p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn dense flat icon-right="info" label="info" />
            <q-btn dense unelevated color="accent" icon-right="add" label="add" />
          </q-card-actions>
        </div>
      </q-card>
    </div>
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
