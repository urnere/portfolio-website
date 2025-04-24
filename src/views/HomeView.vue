<script setup lang="ts">
import Repositories from '@/components/RepositoryList.vue'
import ContentContainer from '@/components/Container.vue'
</script>

<template>
  <div
    class="min-h-screen bg-primary dark:bg-primary-dark text-gray-900 dark:text-secondary p-4 sm:p-8 mr-11 ml-11"
  >
    <div class="max-w-7xl mx-auto"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Metin içeriği -->
      <div
        class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <h5 class="text-lg sm:text-xl font-bold text-black dark:text-white">Hi, I'm Barış</h5>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
          Junior Flutter Developer
        </h1>
        <p class="mt-4 text-sm sm:text-base">
          I'm developing cross-platform mobile applications and web applications.
        </p>
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
          <button
            class="flex items-center justify-center gap-2 border-2 border-secondary rounded-full px-6 py-3"
          >
            Download CV
            <i class="pi pi-download"></i>
          </button>
          <a
            href="https://github.com/urnere"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center rounded-full border-2 border-secondary w-12 h-12"
          >
            <i class="pi pi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/urnere"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center rounded-full border-2 border-secondary w-12 h-12"
          >
            <i class="pi pi-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Profil resmi -->
      <div class="flex justify-center lg:justify-end items-center">
        <div
          class="rotate-12 hover:rotate-0 transition-all duration-300 m-4 rounded-md border-2 border-secondary overflow-hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]"
        >
          <img
            src="@/assets/img/personalpic.jpg"
            alt="Barış'ın profil fotoğrafı"
            class="object-cover w-full h-full object-center"
          />
        </div>
      </div>
    </div>

    <!-- Repositories bölümü -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-4 text-center lg:text-left">Repositories</h2>
      <Repositories />
    </div>

    <!-- Diğer bölümler -->
    <div class="mt-12">
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4 text-center lg:text-left">Development</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-3 sm:flex-col md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <ContentContainer>
            <img src="@/assets/img/logo/flutter-logo.png" class="w-5 h-5 mr-2" alt="Flutter" />
            <h1>Flutter</h1>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/javascript-3.png" class="w-5 h-5 mr-2" alt="JavaScript" />
            <h1>JavaScript</h1>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/html.png" class="w-5 h-5 mr-2" alt="HTML" />
            <h1>HTML</h1>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/Tailwind CSS.png" class="w-5 h-5 mr-2" alt="Tailwind CSS" />
            <h1>Tailwind CSS</h1>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/vue.png" class="w-5 h-5 mr-2" alt="Vue" />
            <h1>Vue</h1>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/react.png" class="w-5 h-5 mr-2" alt="React" />
            <h1>React/React Native</h1>
          </ContentContainer>
          <!-- Diğer ContentContainer'lar -->
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4 text-center lg:text-left">Apps</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <ContentContainer>
            <img src="@/assets/img/logo/vs.png" class="w-5 h-5 mr-2" alt="Visual Studio" />
            <h3>Visual Studio</h3>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/vsc.png" class="w-5 h-5 mr-2" alt="Visual Studio Code" />
            <h3>Visual Studio Code</h3>
          </ContentContainer>
          <ContentContainer>
            <img
              src="@/assets/img/logo/android-studio-icon.png"
              class="w-5 h-5 mr-2"
              alt="Android Studio"
            />
            <h3>Android Studio</h3>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/cursor.png" class="w-5 h-5 mr-2" alt="Cursor" />
            <h3>Cursor</h3>
          </ContentContainer>

          <ContentContainer>
            <img src="@/assets/img/logo/idx.png" class="w-5 h-5 mr-2" alt="IDX" />
            <h3>IDX</h3>
          </ContentContainer>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4 text-center lg:text-left">Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <ContentContainer>
            <img src="@/assets/img/logo/github.png" class="w-5 h-5 mr-2" alt="Github" />
            <h3>Github</h3>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/firebase.png" class="w-5 h-5 mr-2" alt="Firebase" />
            <h3>Firebase</h3>
          </ContentContainer>
          <ContentContainer>
            <img src="@/assets/img/logo/vercel.png" class="w-5 h-5 mr-2" alt="Vercel" />
            <h3>Vercel</h3>
          </ContentContainer>
        </div>
      </section>
    </div>
  </div>
</template>
