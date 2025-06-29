<template>
  <q-page>
    <ProductListing title="Featured Items" :products="products" />
  </q-page>
</template>

<script lang="ts">
import ProductListing from 'components/ProductListing.vue';
import type { IProduct } from 'src/components/models';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: { ProductListing },
  setup() {
    const products: IProduct[] = [
      {
        id: 1,
        name: 'iPhone 16 Pro Max',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/TCL-50NXTPAPER-5G-8-256GB-GREY.jpg?v=1748525026',
        price: 1000,
      },
      {
        id: 2,
        name: 'Samsung Galaxy S25 Ultra',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/HONOR-400-PRO-5G-12GB_512GB-TIDAL-BLUE-offer2.jpg?v=1750083997',
        price: 950,
      },
      {
        id: 3,
        name: 'MacBook Pro 16" M3',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/HONOR-400-PRO-5G-12GB_512GB-LUNAR-GREY-offer2.jpg?v=1750083969',
        price: 8500,
      },
      {
        id: 4,
        name: 'iPad Air 6',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/OPPO-Find-N5-CPH2671-APAC-512GB-16GB-Cosmic-Black-offer.jpg?v=1749635453',
        price: 2500,
      },
      {
        id: 5,
        name: 'Sony WH-1000XM6 Headphones',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/WH-1000XM5-S_09072e22-b6b7-4e66-af16-7fbd0e89aa19.jpg?v=1742387923',
        price: 1200,
        new: true,
      },
      {
        id: 6,
        name: 'Dell XPS 15',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/Infinix-Hot-50I-X6531B-_128Gb-_-4GB_---Sage-Green.jpg?v=1744887253',
        price: 7800,
      },
      {
        id: 7,
        name: 'Apple Watch Series 10',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/MOTO-PB7E0007AE-EDGE-60-Fusion-Amazonite-12_256-PHONE-XT2503-4-AE-AZ-DS-RTL_c2b02cf4-e3ec-4477-a28d-9d4eda56ffee.jpg?v=1745511072',
        price: 1800,
        new: true,
      },
      {
        id: 8,
        name: 'Google Pixel 9 Pro',
        img: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/files/MOTO-PB7X0039AE-EDGE-60-Pro-Shadow-12_512-PHONE-XT2507-1-AE-SD-DS-RTL_77ff39f4-6478-4418-80a9-e047426fd799.jpg?v=1744806838',
        price: 920,
        new: true,
      },
    ];
    return { products };
  },
});
</script>
