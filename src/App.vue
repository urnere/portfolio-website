<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useDarkMode } from '@/components/useDarkMode'
import 'primeicons/primeicons.css'
// ... diğer importlar

const { isDark, toggleDark } = useDarkMode()
const handleToggleDark = (event: MouseEvent) => {
  toggleDark()
}
</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen bg-primary dark:bg-primary-dark text-primary-dark dark:text-secondary"
  >
    <header>
      <div class="wrapper flex justify-between items-center mr-6 ml-10 pt-5 pb-10">
        <nav>
          <RouterLink to="/">
            <div class="w-[80px] h-[30px]">
              <img
                src="@/assets/img/melogo.jpeg"
                alt="Barış'ın logo"
                class="w-full h-full object-cover rounded-md"
              />
            </div>
          </RouterLink>
        </nav>
        <button
          @click="handleToggleDark"
          class="p-2 rounded-full hover:bg-primary-dark/10 transition-all duration-200 dark:hover:bg-primary/10 w-10 h-10 items-center justify-center"
        >
          <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'" />
        </button>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>

<style>
.dark-mode {
  background-color: #333;
  color: #fff;
}

.dark-mode .repository-box {
  background-color: #444;
  border-color: #555;
}
</style>
