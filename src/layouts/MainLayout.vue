<template>
  <q-layout view="hhh LpR fff">
    <q-header class="q-px-xl q-py-lg transparent">
      <ToolbarComponent />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolbarComponent from 'components/ToolbarComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: { ToolbarComponent },
});
</script>
