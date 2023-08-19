<template>
  <section class="contack bg-white pt-[20px] pb-[100px]">
    <Container>
      <div class="flex bg-[#F9F8F7] rounded-[20px] overflow-hidden">
        <div class="rounded-[20px] max-w-[512px] hidden lg:block">
          <img
            class="h-full object-cover"
            src="/images/bg-contact.png"
            alt="Contact"
          />
        </div>

        <div class="p-[20px] sm:p-[32px] max-w-[512px] mx-auto lg:mx-0">
          <form
            @submit="submitForm"
            class="px-[25px] sm:px-[40px] py-[25px] sm:py-[45px] bg-white rounded-[16px]"
          >
            <h1
              class="font-semibold text-[24px] leading-[40px] text-[#0F1826] mb-[17px]"
            >
              Yordam kerakmi?
            </h1>
            <p
              class="font-medium text-[16px] leading-[24px] text-[#607987] mb-[32px]"
            >
              <a class="text-[#BA8D5B]" href="#">FAQ</a> bo'limi ham sizga
              yordam bera olmadimi? Telefon raqamingizni yozib qoldiring, biz
              sizga qo'ng'iroq qilamiz va birorta ham savolingiz javobsiz
              qolmasligiga harakat qilamiz.
            </p>

            <div>
              <label
                class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
                for="name"
                >Ismingizni kiriting</label
              >
              <input
                class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[16px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
                id="name"
                type="text"
                placeholder="Ali"
                v-model="name"
                required
              />

              <label
                class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
                for="phoneNumber"
                >Telefon raqamingizni kiriting</label
              >
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
            </div>

            <p
              class="font-semibold text-[14px] leading-[20px] text-black mb-[32px]"
            >
              "So'rov yuborish" tugmasini bosish orqali
              <a class="text-[#BA8D5B]" href="#"
                >Platformadan foydalanish qoidalari</a
              >
              ga rozilik bildirasiz.
            </p>

            <button
              class="w-full flex items-center justify-center font-bold text-sm sm:text-[16px] sm:leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-[45px] py-[12px] rounded-full"
              type="submit"
            >
              <span>So'rov yuborish</span>
            </button>
          </form>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const formattedPhoneNumber = ref("");

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

  let contacts = [];

  if (localStorage.getItem("contacts"))
    contacts = JSON.parse(localStorage.getItem("contacts"));

  contacts.push({
    name: name.value.trim(),
    phone: "+998" + formattedPhoneNumber.value.split(" ").join(""),
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  name.value = "";
  formattedPhoneNumber.value = "";

  alert("localStorage ga qo'shildi");
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
</style>
