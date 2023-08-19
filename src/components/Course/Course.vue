<template>
  <section class="course bg-[#F9F8F7] py-[48px]">
    <Container>
      <h2
        class="font-bold md:font-extrabold text-2xl md:text-[32px] md:leading-[40px] text-[#0F1826]"
      >
        Yo'nalishlar bo'yicha kurslar
      </h2>
      <p
        class="font-semibold text-[16px] leading-[24px] text-[#607987] my-[18px] md:my-[24px]"
      >
        Zamonaviy sohalardan birini o'rganing va talabgir kasb egasi bo'ling!
      </p>

      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[32px] mb-[16px]"
      >
        <div v-for="el in courses" :key="el.id">
          <CourseItem :id="el.id" :title="el.title" :text="el.text" />
        </div>
      </div>

      <a
        class="font-bold text-[16px] leading-[19px] text-[#0EB182]"
        href="/courses"
        >Barcha kurslarni ko'rish</a
      >
    </Container>
  </section>
</template>
<script setup>
import { courses } from "../../constants/courses";
</script>
<style lang="scss"></style>
