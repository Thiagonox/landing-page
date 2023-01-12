<template>
  <div data-theme="cyberpunk" class="h-screen">
    <header class="navbar bg-base-100 w-[97%] m-auto">
      <div class="flex-1">
        <button @click="goToPage" class="btn btn-ghost normal-case text-xl ">
          <p>
            ロボテューンズ
          </p>
        </button>
      </div>
      <div class="md:w-1/3">
        <ul class="w-full flex justify-around">
          <li><a class="border-b-2 border-primary cursor-pointer mr-4">Home</a></li>
          <li><a class="cursor-pointer">Contact Us</a></li>
        </ul>
      </div>
    </header>
    <main class=" md:flex pt-4 w-[80%] m-auto">
      <div class="md:w-1/2 w-full">
        <h2 class="text-5xl text-primary">音楽アルゴリズム</h2>
        <hr class="w-1/3 border-base-content border-t-2 my-4">
        <div class="text-5xl ">
          <h2>A CHILLING BEAT FROM</h2>
          <h2 class="text-primary">ROBOTIC MUSIC</h2>
          <h2>FOR YOU</h2>
        </div>
        <p class="w-5/6 py-4">
          Robotic music in Japan combines technology and tradition, creating unique sounds. Japan's innovative culture is reflected in its robotic music scene, with festivals growing. Japanese robotic music is a major contributor to the global scene.
        </p>
        <button class="btn btn-outline">Learn More</button>
      </div>
      <div class="w-1/2 hidden md:block">
        <img class="" src="https://docs.google.com/uc?id=1-1hXxP4QKtDcF39r-Y69kvjzrLRdumDf" alt="">    
      </div>
    </main>
    <footer class="w-[97%] m-auto mt-2 flex items-center justify-between">
        <ul class="flex">
          <li class="mr-4"><a>Instagram</a></li>
          <li class="mr-4"><a>Facebook</a></li>
          <li><a>Twitter</a></li>
        </ul>
        <div class="w-full">
          <hr class="border-base-content border-t-2 ml-8">
        </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    goToPage() {
      this.$nuxt.$router.push('https://thiagonox-landing-page.netlify.app/')
    }
  }
}
</script>
