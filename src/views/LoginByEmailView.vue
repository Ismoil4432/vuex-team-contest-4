<template>
  <div class="w-full h-full flex items-center justify-center">
    <form
      @submit="submitForm"
      class="loginForm px-[25px] sm:px-[40px] py-[25px] sm:py-[45px] bg-white rounded-[16px]"
    >
      <h1 class="font-bold text-3xl text-[#0F1826]">Kirish</h1>

      <div class="flex text-center font-semibold mt-3 mb-8">
        <router-link
          class="block w-full py-3 border-b text-[#00000080]"
          to="/auth/login"
        >
          Telefon raqam orqali
        </router-link>

        <router-link
          class="block w-full py-3 border-b text-[#00000080]"
          to="/auth/login/by-email"
        >
          Elektron pochta orqali
        </router-link>
      </div>

      <div>
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

        <div class="relative">
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
      </div>

      <p
        class="font-semibold text-[14px] leading-[20px] text-[#2697FF] my-7 hover:underline cursor-pointer"
      >
        Parolingizni unutdingizmi?
      </p>

      <button
        class="w-full flex items-center justify-center font-bold text-sm sm:text-[16px] sm:leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-[45px] py-[12px] rounded-full"
        type="submit"
      >
        <span>Kirish</span>
      </button>

      <button
        class="w-full flex items-center justify-center gap-5 font-bold text-sm sm:text-[16px] sm:leading-[22px] bg-[#F1F0EE] text-black px-[45px] py-[12px] mt-5 rounded-full"
        type="button"
      >
        <IconGoogle />
        <span>Google orqali</span>
      </button>

      <div
        class="flex items-center justify-center gap-3 font-semibold text-[14px] leading-[20px] text-[#81755C] mb-[32px] text-center py-5"
      >
        <span>Profilingiz yo'qmi?</span>

        <a class="text-[#BA8D5B]" href="/auth/register"> Ro'yxatdan o'tish </a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showPassword = ref(false);

const email = ref("");
const password = ref("");

const submitForm = (event) => {
  event.preventDefault();

  let registerData = localStorage.getItem("register-data");
  if (!registerData) {
    alert("Register");
    router.push({ name: "register" });
  }

  const data = JSON.parse(registerData);

  if (data.email == email.value && data.password == password.value) {
    if (password.value == "admin") {
      localStorage.setItem("role", "admin");
    } else {
      localStorage.setItem("role", "user");
    }

    localStorage.setItem(
      "login-data",
      JSON.stringify({
        email: email.value.trim(),
        password: password.value,
      })
    );

    email.value = "";
    password.value = "";

    // alert("Login data localStorage ga qo'shildi");
    router.push({ name: "home" });
  } else {
    alert("Email or password is wrong");
  }
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: #ba8d5b;
  border-bottom: 2px solid #ba8d5b;
}
@media (min-width: 420px) {
  .loginForm {
    width: 410px;
  }
}

@media (min-width: 640px) {
  .loginForm {
    width: 450px;
  }
}
</style>
