<template>
  <section class="contack bg-white pt-[20px] pb-[100px]">
    <Container>
      <div class="flex bg-[#F9F8F7] rounded-[20px]">
        <div class="rounded-[20px] w-[512px]">
          <img class="rounded-l-[20px]" src="/images/bg-contact.png" alt="" />
        </div>

        <div class="p-[32px] w-[512px]">
          <form
            @submit.prevent
            class="px-[40px] py-[45px] bg-white rounded-[16px]"
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
                class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[3px] block"
                for="name"
                >Ismingizni kiriting</label
              >
              <input
                class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[16px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
                id="name"
                type="text"
                placeholder="Ali"
              />

              <label
                class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[3px] block"
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
              class="w-full flex items-center justify-center font-bold text-[16px] leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-[45px] py-[12px] rounded-full"
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
<script setup></script>
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
