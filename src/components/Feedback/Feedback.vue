<template>
  <section class="feedback bg-white pt-[40px] pb-[60px]">
    <Container>
      <h2
        class="font-bold md:font-extrabold text-2xl md:text-[32px] md:leading-[40px] text-[#0F1826]"
      >
        Bitiruvchilarimizdan izohlar
      </h2>
      <p
        class="font-semibold text-[16px] leading-[24px] text-[#607987] my-[18px] md:my-[24px]"
      >
        O'quv kurslarimiz, ustozlar, qo'lga kiritilgan bilim va ko'nikmalar,
        olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan
        kerakli tavsiyalar oling.
      </p>

      <ul class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[30px]">
        <li v-for="el in feedbacks" :key="el.id">
          <FeedbackItem
            @toggle-video="toggleVideo"
            :id="el.id"
            :image="el.image"
            :video="el.video"
            :date="el.date"
            :job="el.job"
            :fullName="el.fullName"
            :playingId="playingId"
          />
        </li>
      </ul>
    </Container>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { feedbacks } from "../../constants/feedbacks";

const playingId = ref(null);

const toggleVideo = (id) => {
  if (playingId.value !== id) {
    pauseCurrentVideo();
    playVideo(id);
    playingId.value = id;
  } else {
    pauseVideo(id);
    playingId.value = null;
  }
};

const playVideo = (id) => {
  const videoElement = document.getElementById(`video-${id}`);
  if (videoElement) {
    videoElement.play();
  }
};

const pauseVideo = (id) => {
  const videoElement = document.getElementById(`video-${id}`);
  if (videoElement) {
    videoElement.pause();
  }
};

const pauseCurrentVideo = () => {
  if (playingId.value) {
    pauseVideo(playingId.value);
  }
};
</script>
<style lang="scss"></style>
