import { ref, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export function useDarkMode() {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // Tema değişikliğini localStorage'da saklayalım
  watch(isDark, (newValue) => {
    localStorage.setItem('darkMode', newValue ? 'dark' : 'light')
  })

  // Sayfa yüklendiğinde tema tercihini kontrol edelim
  const storedTheme = localStorage.getItem('darkMode')
  if (storedTheme) {
    isDark.value = storedTheme === 'dark'
  }

  return {
    isDark,
    toggleDark
  }
}
