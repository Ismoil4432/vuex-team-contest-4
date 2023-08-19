<template>
  <header class="fixed z-10 top-0 w-full bg-[#F1F0EE]">
    <Container>
      <nav class="flex items-center justify-between py-[17px]">
        <a href="/"><img src="/images/logo.svg" alt="" /></a>

        <button @click="openModal" class="block md:hidden px-2">
          <i class="bx bx-menu text-3xl"></i>
        </button>

        <Modal :visible="modalVisible" @close="closeModal">
          <ul class="flex flex-col items-start gap-5 pt-4">
            <li>
              <a
                class="font-bold text-[16px] leading-[22px] hover:underline"
                href="/courses"
              >
                Kurslar
              </a>
            </li>

            <li>
              <a
                class="font-bold text-[16px] leading-[22px] hover:underline"
                href="/blog"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                class="font-bold text-[16px] leading-[22px] hover:underline"
                href="/auth/login"
              >
                Kirish
              </a>
            </li>
          </ul>
        </Modal>

        <ul class="items-center justify-between gap-9 hidden md:flex">
          <li>
            <a
              class="font-medium text-[16px] leading-[22px] hover:underline"
              href="/courses"
            >
              Kurslar
            </a>
          </li>

          <li>
            <a
              class="font-medium text-[16px] leading-[22px] hover:underline"
              href="/blog"
            >
              Blog
            </a>
          </li>

          <li>
            <a
              class="font-medium text-[16px] leading-[22px] hover:border hover:border-[#ba8d5b] ease-in-out duration-300 px-[12px] py-[9px] w-[140px] block text-center bg-white rounded-full"
              href="/auth/login"
            >
              Kirish
            </a>
          </li>

          <!-- <li>
            <DarkModeBtn />
          </li> -->
        </ul>
      </nav>
    </Container>
  </header>
</template>
<script setup>
import { ref } from "vue";

const modalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
  toggleBodyScroll(false);
};

const closeModal = () => {
  modalVisible.value = false;
  toggleBodyScroll(true);
};

const toggleBodyScroll = (locked) => {
  if (locked) {
    document.body.classList.remove("no-scroll");
  } else {
    document.body.classList.add("no-scroll");
  }
};
</script>
<style lang="scss" scoped></style>
