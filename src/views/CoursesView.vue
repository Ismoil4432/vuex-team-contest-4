<template>
  <Header />
  <main class="mt-[80px]">
    <section class="intro bg-[#fff]">
      <Container class="px-[32px] py-8">
        <div class="flex items-center gap-2">
          <router-link to="/" class="text-[#c4c4c4]">Bosh sahifa</router-link>
          <i class="text-[#c4c4c4] bx bx-right-arrow-alt"></i>
          <router-link to="/courses" class="text-[#ba8d5b]">
            Kurslar
          </router-link>
        </div>
        <div class="flex items-center justify-between">
          <h2 class="heading-[56px] my-8 text-[32px] text-[#0f1826] font-[800]">
            Barcha o‘quv kurslari
          </h2>

          <div class="relative w-[350px]">
            <div
              class="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none"
            >
              <i class="text-xl text-gray-500 bx bx-search"></i>
            </div>
            <input
              type="text"
              class="block w-full p-3 px-4 pr-10 text-md text-gray-900 rounded-full bg-[#f7f6f5] placeholder-gray-500"
              placeholder="Izlash"
              required
            />
          </div>
        </div>
        <div class="flex items-center gap-5">
          <CategoryButton
            title="Barchasi"
            :active="currentCategory == 0"
            @click="() => (currentCategory = 0)"
          />
          <CategoryButton
            v-for="el in category_store.CATEGORY"
            :title="el.name"
            :active="currentCategory == el.id"
            @click="() => (currentCategory = el.id)"
          />
        </div>
        <div class="grid grid-cols-2 gap-5 my-16">
          <CourseCard v-for="el in courses_store.COURSES" :data="el" />
        </div>
      </Container>
    </section>
  </main>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { useCategory } from "@/stores/category";
import { useCourses } from "@/stores/courses";

const category_store = useCategory();
const courses_store = useCourses();
const currentCategory = ref(0);
</script>

<style lang="scss" scoped></style>
