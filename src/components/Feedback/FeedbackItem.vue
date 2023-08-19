<template>
  <div
    @click="toggleVideo(id)"
    :class="`w-fit mx-auto bg-white rounded-[22px] overflow-hidden relative flex justify-center ${
      id != playingId ? 'outline-none' : 'outline outline-gray-700'
    }`"
  >
    <video
      :src="`/videos/${video}`"
      :alt="fullName"
      :id="`video-${id}`"
      ref="videoRef"
    />

    <div
      :class="`absolute rounded-[22px] bg-black w-full h-full ${
        id != playingId ? 'opacity-20' : 'opacity-0'
      }`"
    ></div>

    <div
      class="absolute rounded-[22px] inset-0 bg-gradient-to-b from-transparent from-50% to-black opacity-80"
    ></div>

    <div class="absolute top-4 left-4">
      <PlayBtn :playing="id != playingId" />
    </div>

    <div class="absolute bottom-5 left-5">
      <VideoInfo :date="date" :job="job" :fullName="fullName" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps([
  "id",
  "image",
  "video",
  "date",
  "job",
  "fullName",
  "playingId",
]);

const emits = defineEmits(["toggle-video"]);

const videoRef = ref(null);

const toggleVideo = (id) => {
  emits("toggle-video", id);
};
</script>
<style lang="scss"></style>
