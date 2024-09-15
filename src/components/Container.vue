<script setup lang="ts">
// Bileşen adını "ContentContainer" olarak değiştirdik
defineOptions({
  name: 'ContentContainer'
})

// ... diğer kodlar ...
</script>

<template>
  <div class="content-container sm:border-x-0">
    <div class="content-item flex">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.content-item {
  flex: 1 1 300px;
  max-width: calc(33.333% - 16px);
  min-width: 250px;
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border: 1px solid #e0e0e0;
}

@media (prefers-color-scheme: dark) {
  .content-item {
    background-color: var(--color-background-dark);
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    border-color: #a89a9a;
  }
}

@media (max-width: 768px) {
  .content-item {
    max-width: 100%;
  }
}
</style>
