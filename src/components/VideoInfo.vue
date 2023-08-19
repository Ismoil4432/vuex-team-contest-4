<template>
  <div>
    <h4 class="font-semibold text-[12px] leading-[22px] text-white">
      {{ date }}
    </h4>
    <h4 class="font-semibold text-[12px] leading-[22px] text-[#7CD1AC]">
      {{ job }}
    </h4>
    <h4 class="font-bold text-[16px] leading-[24px] text-white">
      {{ fullName }}
    </h4>
  </div>
</template>
<script setup>
const props = defineProps(["date", "job", "fullName"]);
</script>
<style lang="scss" scoped></style>
