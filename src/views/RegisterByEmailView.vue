<template>
  <div class="w-full h-full flex justify-center">
    <form
      @submit="submitForm"
      class="registerForm px-[25px] sm:px-[40px] py-[25px] sm:py-[45px] bg-white rounded-[16px]"
    >
      <h1 class="font-bold text-3xl text-[#0F1826]">Ro'yxatdan o'tish</h1>

      <div class="flex text-center font-semibold mt-3 mb-8">
        <router-link
          class="block w-full py-3 border-b text-[#00000080]"
          to="/auth/register"
        >
          Telefon raqam orqali
        </router-link>

        <router-link
          class="block w-full py-3 border-b text-[#00000080]"
          to="/auth/register/by-email"
        >
          Elektron pochta orqali
        </router-link>
      </div>

      <div>
        <label
          class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
          for="name"
        >
          Ismingiz
        </label>
        <input
          class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
          id="name"
          type="name"
          placeholder="Ismingizni kiriting"
          v-model="name"
          required
        />

        <label
          class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
          for="email"
        >
          Elektron pochtangiz
        </label>
        <input
          class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
          id="email"
          type="email"
          placeholder="example@najottalim.uz"
          v-model="email"
          required
        />

        <div class="relative mb-[32px]">
          <label
            class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
            for="password"
          >
            Parol
          </label>
          <input
            class="text-[14px] leading-[17px] pl-[16px] pr-[50px] py-[12px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Parolingizni kiriting"
            v-model="password"
            required
          />

          <button
            @click="showPassword = !showPassword"
            type="button"
            class="absolute right-5 top-[58%]"
          >
            <IconVisible v-if="showPassword" />
            <IconNonVisible v-else />
          </button>
        </div>

        <div class="relative mb-5">
          <label
            class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
            for="password"
          >
            Parolni tasdiqlash
          </label>
          <input
            class="text-[14px] leading-[17px] pl-[16px] pr-[50px] py-[12px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Parolingizni kiriting"
            v-model="confirmPassword"
            required
          />

          <button
            @click="showPassword = !showPassword"
            type="button"
            class="absolute right-5 top-[58%]"
          >
            <IconVisible v-if="showPassword" />
            <IconNonVisible v-else />
          </button>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center gap-3">
        <button
          class="flex w-full items-center justify-center gap-5 font-bold text-sm sm:text-[16px] sm:leading-[22px] bg-[#F1F0EE] text-black px-4 py-3 rounded-full"
          type="button"
        >
          <IconGoogle />
          <span>Google orqali</span>
        </button>

        <button
          class="flex w-full items-center justify-center font-bold text-sm sm:text-[16px] sm:leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-4 py-3 rounded-full"
          type="submit"
        >
          <span>Ro'yxatdan o'tish</span>
        </button>
      </div>

      <p class="font-semibold text-xs text-center my-5 text-black">
        Ro'yxatdan o'tish tugamasini bosish orqali siz
        <a class="text-[#BA8D5B]" href="#">Shaxsiy ma'lumotlarni</a> qayta
        ishlash va
        <a class="text-[#BA8D5B]" href="#">Foydalanish qoidalariga</a> rozilik
        bildirasiz
      </p>

      <div
        class="flex items-center justify-center gap-3 border-t font-semibold text-[14px] leading-[20px] text-[#81755C] mb-[32px] text-center py-5"
      >
        <span>Ro'yxatdan o'tganmisiz?</span>

        <a class="text-[#BA8D5B]" href="/auth/login"> Profilga kirish </a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showPassword = ref(false);

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const submitForm = (event) => {
  event.preventDefault();

  localStorage.setItem(
    "register-data",
    JSON.stringify({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value,
    })
  );

  name.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";

  // alert("Register data localStorage ga qo'shildi");
  router.push({ name: "login" });
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: #ba8d5b;
  border-bottom: 2px solid #ba8d5b;
}

@media (min-width: 420px) {
  .registerForm {
    width: 410px;
  }
}

@media (min-width: 640px) {
  .registerForm {
    width: 450px;
  }
}
</style>
