<script setup>
defineProps(["title", "active"]);
</script>

<template>
	<button
		class="px-[24px] py-[15px] rounded-[32px] font-[600] text-[14px] border border-[#f7f7f5] duration-300"
		:class="
			active
				? 'bg-[#ba8d5b] text-white'
				: 'text-[rgba(0,0,0,.7)] bg-[#f7f7f5]  hover:text-black/90 hover:border-[#ba8d5b] hover:bg-white'
		">
		{{ title }}
	</button>
</template>

<style scoped></style>
