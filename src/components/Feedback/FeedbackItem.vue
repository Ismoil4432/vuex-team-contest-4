<template>
  <div
    class="w-fit mx-auto my-[14px] bg-white rounded-[22px] relative flex justify-center"
  >
    <img :src="`/images/${image}`" alt="" />

    <div
      class="absolute rounded-[22px] inset-0 bg-gradient-to-b from-transparent to-black opacity-60"
    ></div>

    <div class="absolute top-4 left-4">
      <PlayBtn />
    </div>

    <div class="absolute bottom-5 left-5">
      <VideoInfo :date="date" :job="job" :fullName="fullName" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["id", "image", "date", "job", "fullName"]);
</script>
<style lang="scss"></style>
