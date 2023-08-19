<template>
  <section class="advantage bg-white min-h-[500px] py-[48px]">
    <Container>
      <h2
        class="font-bold md:font-extrabold text-2xl md:text-[32px] md:leading-[40px] text-[#0F1826] mb-[48px]"
      >
        Bizning afzalliklarimiz
      </h2>

      <div class="grid md:grid-cols-2 gap-[40px] mb-[16px]">
        <div
          v-for="el in advantages.slice(0, toggle ? advantages.length : 4)"
          :key="el.id"
        >
          <AdvantageItem
            :id="el.id"
            :icon="el.icon"
            :title="el.title"
            :text="el.text"
          />
        </div>
      </div>

      <button
        @click="toggleBtn"
        class="font-semibold text-[16px] leading-[20px] text-[#0EB182] flex gap-2"
      >
        {{ toggle ? "Qisqartirish" : "Ko'proq" }}
        <span
          :class="`bg-[#BA8D5B1A] border border-[#BA8D5B1A] rounded-full hover:bg-white hover:border-[#bd8f5b] ${
            toggle ? 'rotate-180' : ''
          }`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
          >
            <path
              d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
            ></path>
          </svg>
        </span>
      </button>
    </Container>
  </section>
</template>
<script setup>
import { advantages } from "../../constants/advantages";
import { ref } from "vue";

const toggle = ref(false);

const toggleBtn = () => {
  toggle.value = !toggle.value;
};
</script>
<style lang="scss"></style>
