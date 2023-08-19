<template>
  <header class="fixed z-10 top-0 w-full bg-[#F1F0EE]">
    <Container>
      <nav class="flex items-center justify-between px-[32px] py-[17px]">
        <a href="/"><img src="/images/logo.svg" alt="" /></a>

        <ul class="flex items-center justify-between gap-9">
          <li>
            <a
              class="font-medium text-[16px] leading-[22px] hover:underline"
              href="/courses"
              >Kurslar</a
            >
          </li>

          <li>
            <a
              class="font-medium text-[16px] leading-[22px] hover:underline"
              href="/blog"
              >Blog</a
            >
          </li>

          <li>
            <a
              class="font-medium text-[16px] leading-[22px] hover:border hover:border-[#ba8d5b] ease-in-out duration-300 px-[12px] py-[9px] w-[140px] block text-center bg-white rounded-full"
              href="/login"
              >Kirish</a
            >
          </li>

          <li>
            <DarkModeBtn />
          </li>
        </ul>
      </nav>
    </Container>
  </header>
</template>
<script setup></script>
<style lang="scss" scoped></style>
