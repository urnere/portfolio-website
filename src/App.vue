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
    <header class="">
      <div
        class="wrapper flex justify-between items-center mr-12 ml-12 md:mr-16 md:ml-16 lg:mr-16 lg:ml-16 pt-5 pb-10"
      >
        <nav>
          <RouterLink to="/">
            <div class="w-[80px] h-[30px]">
              <img
                src="@/assets/img/melogo.jpeg"
                alt="Barış'ın logo"
                class="w-full h-full object-cover rounded-md ml-4"
              />
            </div>
          </RouterLink>
        </nav>
        <button
          @click="handleToggleDark"
          class="rounded-full hover:bg-primary-dark/10 transition-all duration-200 dark:hover:bg-primary/10 w-10 h-10 items-center justify-center mr-4"
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
