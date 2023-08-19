<script setup>
defineProps(["data"]);
</script>

<template>
  <div
    class="bg-[#f7f7f5] p-5 hover:shadow-lg rounded duration-200 cursor-pointer"
  >
    <div class="lg:flex hidden items-center gap-7">
      <span
        :class="`text-sm ${
          data.category.bg ? data.category.bg : 'bg-slate-900'
        } p-1 px-3 rounded text-white`"
      >
        {{ data.category.name }}
      </span>
      <div v-if="data.durationInMinutes" class="">
        <span class="text-[14px] text-[#ba8d5b]">Davomiylik: </span>
        <span class="text-[14px] font-bold text-[#ba8d5b]">
          {{ Math.floor(data.durationInMinutes / 60) }} soat
          {{ data.durationInMinutes % 60 }} daqiqa
        </span>
      </div>
      <div v-if="data.lessons" class="">
        <span class="text-[14px] text-[#ba8d5b]">Darslar soni: </span>
        <span class="text-[14px] font-bold text-[#ba8d5b]">
          {{ data.lessons }} ta
        </span>
      </div>
    </div>
    <div class="lg:flex py-5">
      <img
        :src="`/courses/${data.img}`"
        class="lg:hidden block w-[180px] h-[180px] mx-auto"
      />
      <div class="lg:w-[55%] w-full">
        <div class="flex items-start justify-between">
          <h2 class="lg:text-[28px] text-[24px] font-[700] mb-6">
            {{ data.title }}
          </h2>
          <span
            :class="`lg:hidden block mt-1.5 text-sm ${
              data.category.bg ? data.category.bg : 'bg-slate-900'
            } p-1 px-3 rounded text-white`"
          >
            {{ data.category.name }}
          </span>
        </div>
        <p class="text-[rgba(0,0,0,.7)] font-[500] text-[14px] block">
          {{ data.text }}
        </p>
      </div>
      <img
        :src="`/courses/${data.img}`"
        class="lg:block hidden w-[180px] h-[180px] mx-auto"
        alt=""
      />
    </div>
    <div class="lg:hidden block">
      <div v-if="data.durationInMinutes" class="">
        <span class="text-[14px] text-[#ba8d5b]">Davomiylik: </span>
        <span class="text-[14px] font-bold text-[#ba8d5b]">
          {{ Math.floor(data.durationInMinutes / 60) }} soat
          {{ data.durationInMinutes % 60 }} daqiqa
        </span>
      </div>
      <div v-if="data.lessons" class="">
        <span class="text-[14px] text-[#ba8d5b]">Darslar soni: </span>
        <span class="text-[14px] font-bold text-[#ba8d5b]">
          {{ data.lessons }} ta
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
