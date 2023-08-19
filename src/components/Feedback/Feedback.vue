<template>
  <section class="feedback bg-white pt-[40px] pb-[60px]">
    <Container class="px-[32px]">
      <h2
        class="font-extrabold text-[32px] leading-[40px] text-[#0F1826] mb-[24px]"
      >
        Bitiruvchilarimizdan izohlar
      </h2>
      <p
        class="font-semibold text-[16px] leading-[24px] text-[#607987] mb-[48px]"
      >
        O'quv kurslarimiz, ustozlar, qo'lga kiritilgan bilim va ko'nikmalar,
        olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan
        kerakli tavsiyalar oling.
      </p>

      <ul class="grid grid-cols-4">
        <li v-for="el in feedbacks" :key="el.id">
          <FeedbackItem
            :id="el.id"
            :image="el.image"
            :date="el.date"
            :job="el.job"
            :fullName="el.fullName"
          />
        </li>
      </ul>
    </Container>
  </section>
</template>
<script setup>
import { feedbacks } from "../../constants/feedbacks";
</script>
<style lang="scss"></style>
