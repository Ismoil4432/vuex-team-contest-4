<template>
  <Header />
  <main class="mt-[80px]">
    <Intro />
    <Advantage />
    <Course />
    <JobOffer />
    <Feedback />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import { useCourses } from "@/stores/courses";

const courses_store = useCourses();

onMounted(() => {
  courses_store.updateData();
});
</script>

<style lang="scss" scoped></style>
