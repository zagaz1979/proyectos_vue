<template>
  <MainLayout>
    <template #main>
      <h5>Main Content</h5>
    </template>
    <template #aux>
      <p>Posicion en x: {{ x }} posicion en y: {{ y }}</p>

    </template>
</MainLayout>
</template>

<script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue';

  import { useMouse } from '@/composables/useMouse';

  const {x, y} = useMouse()

</script>