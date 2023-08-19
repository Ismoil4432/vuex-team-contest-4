<template>
  <Header />
  <main class="mt-[80px]">
    <Container>
      <div class="flex items-center justify-center">
        <img
          class="h-[200px] sm:h-[400px] object-contain"
          src="/images/error-page.webp"
          alt="error"
        />
      </div>

      <div
        class="flex items-center justify-center text-center my-5 text-[#00000055] font-semibold text-lg"
      >
        <h2>Bu sahifa topilmadi! Bosh sahifaga qayting.</h2>
      </div>

      <div class="flex items-center justify-center mb-24">
        <router-link
          to="/"
          class="flex items-center justify-center font-bold text-sm sm:text-[16px] sm:leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-[45px] py-[12px] rounded-full"
          type="submit"
        >
          <span>Bosh sahifaga qaytish</span>
        </router-link>
      </div>
    </Container>
  </main>
  <Footer />
</template>

<script setup></script>

<style lang="scss" scoped></style>
