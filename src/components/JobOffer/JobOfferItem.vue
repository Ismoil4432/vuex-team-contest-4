<template>
  <div
    class="aspect-video px-[12px] py-[16px] flex items-center justify-center bg-[#F9F8F7] rounded-lg filter grayscale hover:grayscale-0 hover:bg-white duration-150 custom-shadow"
  >
    <img :src="`/images/${icon}`" alt="" />
  </div>
</template>
<script setup>
const props = defineProps(["id", "icon"]);
</script>
<style lang="scss">
.custom-shadow:hover {
  box-shadow: 0 2px 18px 3px rgba(0, 0, 0, 0.05);
}
</style>
