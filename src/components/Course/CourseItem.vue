<template>
  <a
    :href="`/courses/${id}`"
    class="block min-w-[255px] h-[95px] p-[16px] border border-[#607987] rounded hover:bg-white hover:border-white duration-150 custom-shadow"
  >
    <h3 class="font-bold text-[20px] leading-[27px] text-[#0F1826]">
      {{ formatTitle(title) }}
    </h3>
    <p class="font-medium text-[16px] leading-[24px] text-[#607987] my-[14px]">
      {{ formatText(text) }}
    </p>
  </a>
</template>
<script setup>
const props = defineProps(["id", "title", "text"]);

const formatTitle = (title) => {
  const range = 22;
  let result = title.slice(0, range);
  if (title.length >= range + 1) {
    result += "...";
  }
  return result;
};

const formatText = (text) => {
  const range = 27;
  let result = text.slice(0, range);
  if (text.length >= range + 1) {
    result += "...";
  }
  return result;
};
</script>
<style lang="scss">
.custom-shadow:hover {
  box-shadow: 0 2px 18px 3px rgba(0, 0, 0, 0.05);
}
</style>
