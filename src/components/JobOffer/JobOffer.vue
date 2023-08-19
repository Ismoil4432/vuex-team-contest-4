<template>
  <section class="job offer bg-white py-[48px]">
    <Container class="px-[32px]">
      <h2 class="font-extrabold text-[32px] leading-[40px] text-[#0F1826] mb-[24px]">
        Bitiruvchilarimizning ish joylari:
      </h2>
      <p
        class="font-semibold text-[16px] leading-[24px] text-[#607987] mb-[48px]"
      >
        Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda
        faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab
        yuqori bo'ladi.
      </p>

      <ul class="grid grid-cols-6 gap-[31px]">
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
