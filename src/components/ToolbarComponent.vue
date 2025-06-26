<template>
  <q-toolbar class="bg-white shadow-8 q-pa-md toolbar">
    <q-img
      src="/starlink-logo.Dq04HoxM.svg"
      spinner-color="white"
      width="315px"
      height="auto"
      class="q-mx-md"
    /><q-separator vertical inset class="q-mx-sm" />
    <div class="q-px-sm full-width row">
      <ProductsMenu class="col-2" />
      <SearchBar class="q-mx-md col" />
      <div class="flex align-items justify-around col-2 q-px-md">
        <a href=""><q-icon name="account_circle" color="black" text-color="black" size="lg" /></a>
        <q-separator vertical inset />
        <a href=""><q-icon name="shopping_cart" color="black" text-color="black" size="lg" /></a>
      </div>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import ProductsMenu from 'components/ProductsMenu.vue';
import SearchBar from 'components/SearchBar.vue';

export default defineComponent({
  name: 'ToolbarComponent',
  components: { ProductsMenu, SearchBar },
  setup() {
    const itemClick = ref(false);
    const text = ref('');
    return {
      itemClick,
      text,
      onItemClick() {
        itemClick.value = !itemClick.value;
      },
    };
  },
});
</script>

<style>
.toolbar {
  border-radius: 24px;
}
</style>
