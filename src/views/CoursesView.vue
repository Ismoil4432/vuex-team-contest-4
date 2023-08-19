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
        <div class="sm:flex items-center justify-between">
          <h2 class="heading-[56px] my-8 text-[32px] text-[#0f1826] font-[800]">
            Barcha o‘quv kurslari
          </h2>

          <div class="relative sm:w-[300px] md:w-[350px] mb-10 sm:mb-0">
            <div
              class="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none"
            >
              <i class="text-xl text-gray-500 bx bx-search"></i>
            </div>
            <input
              type="text"
              class="block w-full p-3 px-4 pr-10 text-md text-gray-900 rounded-full bg-[#f7f6f5] placeholder-gray-500"
              placeholder="Izlash"
              @change="search"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-5">
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
        <div v-if="courses.length" class="grid md:grid-cols-2 gap-5 my-16">
          <CourseCard v-for="el in courses" :data="el" />
        </div>

        <div v-else>
          <div class="flex items-center justify-center mt-32">
            <IconNoData />
          </div>

          <h3 class="text-[#ba8d5b] text-center mt-5 mb-32">
            Sizning qidiruv bo'yicha kurs topilmadi.
          </h3>
        </div>
      </Container>
    </section>
  </main>
  <Footer />
</template>

<script setup>
import { ref, computed } from "vue";
import { useCategory } from "@/stores/category";
import { useCourses } from "@/stores/courses";

const category_store = useCategory();
const courses_store = useCourses();
const currentCategory = ref(0);

const searching = ref(null);

const courses = computed(() => {
  if (currentCategory.value)
    return courses_store.COURSES.filter(
      (item) => item.category.id == currentCategory.value
    );

  if (searching.value)
    return courses_store.COURSES.filter(
      (item) =>
        item.title
          .toLocaleLowerCase()
          .includes(searching.value.toLocaleLowerCase()) ||
        item.text
          .toLocaleLowerCase()
          .includes(searching.value.toLocaleLowerCase())
    );

  return courses_store.COURSES;
});

const search = (event) => {
  searching.value = event.target.value;
};
</script>

<style lang="scss" scoped></style>
