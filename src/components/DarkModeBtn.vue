<template>
  <button
    @click="toggleBtn"
    class="dark-mode ease-in-out duration-300 p-[12px] block text-center bg-white rounded-full"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.208328C3.69678 0.208328 0.208336 3.69678 0.208336 7.99999C0.208336 12.3032 3.69678 15.7917 8 15.7917C12.0495 15.7917 15.377 12.7028 15.7558 8.75234C15.7734 8.56848 15.679 8.39201 15.5162 8.3047C15.3534 8.21739 15.1542 8.23632 15.0107 8.3527C14.2227 8.99215 13.2192 9.37499 12.125 9.37499C9.5937 9.37499 7.54167 7.32297 7.54167 4.79166C7.54167 3.28823 8.26506 1.95388 9.38471 1.11736C9.53275 1.00675 9.59988 0.818062 9.55498 0.638806C9.51007 0.459551 9.36191 0.324797 9.17921 0.297047C8.7944 0.238598 8.40059 0.208328 8 0.208328Z"
      />
    </svg>
  </button>
</template>
<script setup>
import { ref } from "vue";

const toggle = ref(false);
const toggleBtn = () => {
  console.log(document.querySelector(".dark-mode").classList.toggle("active"));
};
</script>
<style lang="scss" scoped>
.dark-mode {
  svg {
    fill: #555555;
  }
}

.dark-mode:hover {
  svg {
    fill: black;
  }
}

.active {
  background: #bd8f5b;
  svg {
    fill: white;
  }
}

.active:hover {
  background: #a0794d;
  svg {
    fill: white;
  }
}
</style>
