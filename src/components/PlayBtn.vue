<template>
  <button class="p-[6px] bg-white rounded-full flex items-center gap-[8px]">
    <div
      class="w-[28px] h-[28px] bg-[#BA8D5B] flex items-center justify-center rounded-full"
    >
      <svg
        v-if="playing"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 22 24"
        style="fill: rgb(255, 255, 255); transform: ; msfilter: "
      >
        <path d="M7 6v12l10-6z"></path>
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgb(255, 255, 255); transform: ; msfilter: "
      >
        <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
      </svg>
    </div>
    <span class="font-bold text-[12px] leading-[22px] text-black">
      Vidoni ko'rish
    </span>
  </button>
</template>
<script setup>
defineProps(["playing"]);
</script>

<style lang="scss" scoped></style>
