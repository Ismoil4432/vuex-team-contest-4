<template>
  <section class="job offer bg-white py-[48px]">
    <Container>
      <h2
        class="font-bold md:font-extrabold text-2xl md:text-[32px] md:leading-[40px] text-[#0F1826]"
      >
        Bitiruvchilarimizning ish joylari:
      </h2>
      <p
        class="font-semibold text-[16px] leading-[24px] text-[#607987] mb-[48px] my-[18px] md:my-[24px]"
      >
        Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda
        faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab
        yuqori bo'ladi.
      </p>

      <ul
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[31px]"
      >
        <li v-for="el in companies" :key="el.id">
          <JobOfferItem :id="el.id" :icon="el.icon" />
        </li>
      </ul>
    </Container>
  </section>
</template>
<script setup>
import { companies } from "../../constants/companies";
</script>
<style lang="scss"></style>
