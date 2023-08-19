<script setup>
defineProps(["data"]);
</script>

<template>
	<div
		class="bg-[#f7f7f5] p-5 hover:shadow-lg rounded duration-200 cursor-pointer">
		<div class="lg:flex hidden items-center gap-7">
			<span class="text-sm bg-slate-900 p-1 px-3 rounded text-white">
				Dasturlash
			</span>
			<div class="">
				<span class="text-[14px] text-[#ba8d5b]">Davomiylik: </span>
				<span class="text-[14px] font-bold text-[#ba8d5b]"
					>23 soat 7 daqiqa
				</span>
			</div>
			<div class="">
				<span class="text-[14px] text-[#ba8d5b]">Darslar soni: </span>
				<span class="text-[14px] font-bold text-[#ba8d5b]">93 ta </span>
			</div>
		</div>
		<div class="lg:flex py-5">
			<img
				src="/courses/smd.svg"
				class="lg:hidden block w-[180px] h-[180px] mx-auto" />
			<div class="lg:w-[55%] w-full">
				<div class="flex items-start justify-between">
					<h2 class="lg:text-[28px] text-[24px] font-[700]">
						.NET mutaxassislik kursi
					</h2>
					<span
						class="lg:hidden block mt-1.5 text-sm bg-slate-900 p-1 px-3 rounded text-white">
						Dasturlash
					</span>
				</div>
				<p class="text-[rgba(0,0,0,.7)] font-[500] text-[14px] block">
					.NET mutaxassislik kursi yordamida universal C# dasturlash tilida
					ishlovchi va oʻz faoliyatida .NET platformasi va texnologiyalaridan
					foydalanuvchi dasturchiga aylaning. C# dasturlash tilining
					imkoniyatlari va qoʻllash
				</p>
			</div>
			<img
				src="/courses/smd.svg"
				class="lg:block hidden w-[180px] h-[180px] mx-auto"
				alt="" />
		</div>
		<div class="lg:hidden block">
			<div class="">
				<span class="text-[14px] text-[#ba8d5b]">Davomiylik: </span>
				<span class="text-[14px] font-bold text-[#ba8d5b]"
					>23 soat 7 daqiqa
				</span>
			</div>
			<div class="">
				<span class="text-[14px] text-[#ba8d5b]">Darslar soni: </span>
				<span class="text-[14px] font-bold text-[#ba8d5b]">93 ta </span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
