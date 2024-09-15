<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
}

const repositories = ref<Repository[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('https://api.github.com/users/urnereDev/repos')
    repositories.value = response.data
  } catch (error) {
    console.error('Repolar yüklenirken hata oluştu:', error)
  }
})
</script>

<template>
  <div class="repositories-container">
    <div v-for="repo in repositories" :key="repo.id" class="repository-box">
      <h3 class="text-lg font-semibold text-secondary dark:text-primary mb-2">{{ repo.name }}</h3>
      <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">{{ repo.description }}</p>
      <a
        :href="repo.html_url"
        target="_blank"
        class="inline-block px-4 py-2 bg-secondary dark:bg-primary text-primary dark:text-secondary rounded-full hover:opacity-80 transition-opacity border-2 border-secondary dark:border-primary"
        >GitHub'da Görüntüle</a
      >
    </div>
  </div>
</template>

<style scoped>
.repositories-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}

.repository-box {
  border: 3px solid transparent;
  border-radius: 12px;
  padding: 20px;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.repository-box::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: var(--color-secondary);
  z-index: -1;
  border-radius: 14px;
}

.repository-box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-primary);
  z-index: -1;
  border-radius: 10px;
}

.repository-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.repository-box:hover::before {
  background: var(--color-accent);
}

:root {
  --color-primary: #ffffff;
  --color-secondary: #000000;
  --color-accent: #3498db;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #000000;
    --color-secondary: #ffffff;
    --color-accent: #2ecc71;
  }
}

@media (max-width: 640px) {
  .repositories-container {
    grid-template-columns: 1fr;
  }

  .repository-box {
    max-width: 100%;
  }
}
</style>
