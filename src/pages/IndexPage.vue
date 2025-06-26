<template>
  <q-page>
    <ProductListing title="Featured Items" />
  </q-page>
</template>

<script lang="ts">
import ProductListing from 'components/ProductListing.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: { ProductListing },
});
</script>
