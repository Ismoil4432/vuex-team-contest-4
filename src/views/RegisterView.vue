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
          for="phoneNumber"
        >
          Telefon raqam
        </label>
        <div class="phoneNumberClass relative">
          <input
            class="text-[14px] leading-[17px] pl-[54px] pr-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
            id="phoneNumber"
            type="text"
            inputmode="numeric"
            placeholder="00 000 00 00"
            maxlength="12"
            v-model="formattedPhoneNumber"
            @input="formatPhoneNumber"
            required
          />
        </div>

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

        <div class="relative">
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

      <div class="flex gap-2 my-5">
        <div class="flex-shrink-0 pt-[2px]">
          <IconInfo />
        </div>

        <p class="font-semibold text-xs text-[#00000050]">
          Agarda siz O'zbekistondan tashqarida istiqomat qilib telefon raqam
          orqali ro'yxatdan o'tmoqchi bo'lsangiz,
          <a class="text-[#BA8D5B]" href="https://t.me/ntonlayn_bot"
            >qo'llab-quvvatlash xizmati</a
          >
          orqali murojaat qilib telefon raqamni ro'yxatdan o'tkazishingiz
          mumkin.
        </p>
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
        <a
          class="text-[#BA8D5B]"
          href="https://go.najottalim.uz/static/media/oferta.98bafc87b0606713cd40.pdf"
          >Shaxsiy ma'lumotlarni</a
        >
        qayta ishlash va
        <a
          class="text-[#BA8D5B]"
          href="https://go.najottalim.uz/static/media/oferta.98bafc87b0606713cd40.pdf"
          >Foydalanish qoidalariga</a
        >
        rozilik bildirasiz
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
const formattedPhoneNumber = ref("");
const password = ref("");
const confirmPassword = ref("");

const formatPhoneNumber = () => {
  const inputElement = document.getElementById("phoneNumber");
  const inputValue = inputElement.value.replace(/\D/g, ""); // Remove non-numeric characters
  let formattedValue = "";

  for (let i = 0; i < inputValue.length; i++) {
    if (i === 2 || i === 5 || i === 7) {
      formattedValue += " ";
    }
    formattedValue += inputValue[i];
  }

  formattedPhoneNumber.value = formattedValue;
};

const submitForm = (event) => {
  event.preventDefault();

  localStorage.setItem(
    "register-data",
    JSON.stringify({
      name: name.value.trim(),
      phone: "+998" + formattedPhoneNumber.value.split(" ").join(""),
      password: password.value,
    })
  );

  name.value = "";
  formattedPhoneNumber.value = "";
  password.value = "";
  confirmPassword.value = "";

  // alert("Register data localStorage ga qo'shildi");
  router.push({ name: "login" });
};
</script>

<style lang="scss">
.phoneNumberClass::before {
  content: "+998";
  position: absolute;
  color: black;
  top: 13px;
  left: 17px;
  font-size: 14px;
  line-height: 17px;
}

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
