<template>
  <q-btn-dropdown icon="local_mall" label="Products" text-color="black" flat>
    <q-list>
      <q-item
        v-for="(items, category) in products"
        :key="category"
        @mouseenter="hover = category"
        @mouseleave="hover = null"
        clickable
      >
        <q-item-section>{{ category }}</q-item-section>

        <!-- Submenu for items (appears to the right) -->
        <q-menu
          v-show="hover === category"
          :anchor="'top end'"
          :self="'top start'"
          no-parent-event
          fit
        >
          <q-list style="min-width: 150px">
            <q-item
              v-for="item in items"
              :key="item"
              clickable
              v-close-popup
              @click="onItemClick(item)"
            >
              <q-item-section>{{ item }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ProductsMenu',
  setup() {
    const hover = ref<string | null>(null);

    const products: Record<string, string[]> = {
      Phones: ['iPhone', 'Samsung', 'Xiaomi'],
      Laptops: ['MacBook', 'Dell', 'HP'],
      Tablets: ['iPad', 'Galaxy Tab'],
    };

    function onItemClick(item: string) {
      console.log('Selected:', item);
    }

    return {
      products,
      hover,
      onItemClick,
    };
  },
});
</script>
