<script setup lang="ts">
import Repositories from '@/components/Repositories.vue'
import ContentContainer from '@/components/Container.vue'
</script>

<template>
  <div
    class="min-h-screen bg-primary dark:bg-primary-dark text-gray-900 dark:text-secondary p-4 sm:p-8"
  >
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12">
        <!-- Sol taraf: Metin içeriği -->
        <div class="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h5 class="text-lg sm:text-xl font-bold text-black dark:text-white">Hi, I am Barış</h5>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Flutter & Frontend Developer
          </h1>
          <p class="mt-4 text-sm sm:text-base">
            I develop cross-platform mobile applications and web applications.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
            <button
              class="flex items-center justify-center gap-2 border-2 border-secondary rounded-full px-6 py-3"
            >
              Download CV
              <i class="pi pi-download"></i>
            </button>
            <a
              href="https://github.com/urnereDev"
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

        <!-- Sağ taraf: Profil resmi -->
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
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
      <div class="mt-12 flex flex-col justify-center">
        <div class="text-2xl font-bold mb-4">Repositories</div>
        <div class="w-full">
          <Repositories />
        </div>
      </div>
      <div class="flex flex-col justify-center mt-12">
        <div class="text-2xl font-bold mb-4">Development</div>
        <div class="w-full">
          <div class="flex flex-wrap gap-4">
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
              <img
                src="@/assets/img/logo/Tailwind CSS.png"
                class="w-5 h-5 mr-2"
                alt="Tailwind CSS"
              />
              <h1>Tailwind CSS</h1>
            </ContentContainer>
            <ContentContainer>
              <img src="@/assets/img/logo/vue.png" class="w-5 h-5 mr-2" alt="Vue" />
              <h1>Vue</h1>
            </ContentContainer>
            <ContentContainer>
              <img src="@/assets/img/logo/react.png" class="w-5 h-5 mr-2" alt="React" />
              <h1>React</h1>
            </ContentContainer>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center mt-12">
        <div class="text-2xl font-bold mb-4">Apps</div>
        <div class="w-full">
          <div class="flex flex-wrap gap-4">
            <ContentContainer>
              <img src="@/assets/img/logo/vs.png" class="w-5 h-5 mr-2" alt="Visual Studio" />
              <h1>Visual Studio</h1>
            </ContentContainer>
            <ContentContainer>
              <img src="@/assets/img/logo/vsc.png" class="w-5 h-5 mr-2" alt="Visual Studio Code" />
              <h1>Visual Studio Code</h1>
            </ContentContainer>
            <ContentContainer>
              <img
                src="@/assets/img/logo/android-studio-icon.png"
                class="w-5 h-5 mr-2"
                alt="Android Studio"
              />
              <h1>Android Studio</h1>
            </ContentContainer>
            <ContentContainer>
              <img src="@/assets/img/logo/cursor.png" class="w-5 h-5 mr-2" alt="Cursor" />
              <h1>Cursor</h1>
            </ContentContainer>

            <ContentContainer>
              <img src="@/assets/img/logo/idx.png" class="w-5 h-5 mr-2" alt="IDX" />
              <h1>IDX</h1>
            </ContentContainer>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center mt-12">
        <div class="text-2xl font-bold mb-4">Services</div>
        <div class="w-full">
          <div class="flex flex-wrap gap-4">
            <ContentContainer>
              <img src="@/assets/img/logo/github.png" class="w-5 h-5 mr-2" alt="Github" />
              <h1>Github</h1>
            </ContentContainer>
            <ContentContainer>
              <img src="@/assets/img/logo/firebase.png" class="w-5 h-5 mr-2" alt="Firebase" />
              <h1>Firebase</h1>
            </ContentContainer>
            <ContentContainer>
              <img src="@/assets/img/logo/vercel.png" class="w-5 h-5 mr-2" alt="Vercel" />
              <h1>Vercel</h1>
            </ContentContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
