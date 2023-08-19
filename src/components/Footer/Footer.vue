<template>
  <footer class="bg-[#F9F8F7] pt-[26px] pb-[36px]">
    <Container>
      <div class="flex flex-col md:flex-row gap-[33px]">
        <div class="flex flex-col md:w-[255px]">
          <div>
            <a class="block mb-[16px]" href="/"
              ><img src="/images/logo.svg" alt=""
            /></a>
            <p class="font-semibold text-[14px] leading-[22px] text-[#607987]">
              Onlayn platformaga tegishli barcha materiallar "NAJOT TA'LIM
              MARKAZI" MCHJning mulki hisoblanadi. Ushbu materiallardan onlayn
              ta'lim olishdan tashqari nusxa ko'chirish, tarqatish va boshqa
              maqsadlarda foydalanish qonunan man etiladi.
            </p>
          </div>

          <Copyright class="hidden lg:block" />
        </div>

        <div class="md:w-[75%]">
          <div class="sm:grid grid-cols-3 gap-5 pb-[32px]">
            <div class="">
              <h3
                class="font-bold text-[16px] leading-[20px] text-[#0F1826] mt-10 sm:mt-[10px]"
              >
                Ma'lumotlar
              </h3>
              <ul class="mt-5 sm:mt-[34px]">
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >FAQ</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Ommaviy oferta</a
                  >
                </li>
              </ul>
            </div>

            <div class="">
              <h3
                class="font-bold text-[16px] leading-[20px] text-[#0F1826] mt-10 sm:mt-[10px]"
              >
                Ommabop Kurslar
              </h3>
              <ul class="mt-5 sm:mt-[34px]">
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >SMM onlayn</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Kompyuter savodxonligi kursi</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Dasturlash foundation</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >.NET mutaxassislik kursi</a
                  >
                </li>
              </ul>
            </div>

            <div class="">
              <h3
                class="font-bold text-[16px] leading-[20px] text-[#0F1826] mt-10 sm:mt-[10px]"
              >
                Bizning Loyihalar
              </h3>
              <ul class="mt-5 sm:mt-[34px]">
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Osmondagi bolalar</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >0 dan 1 gacha</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Abutech</a
                  >
                </li>
                <li>
                  <a
                    class="font-semibold text-[14px] leading-[32px] text-[#607987] block hover:underline"
                    href="#"
                    >Alohida mavzu</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="grid-cols-3 gap-5 lg:border-t border-[#81755C4D] pt-[33px] hidden lg:grid"
          >
            <Location />

            <SocialMedia />

            <Phone />
          </div>
        </div>
      </div>

      <div class="block lg:hidden">
        <div class="flex justify-between items-center gap-5 py-8">
          <SocialMedia />

          <Phone />
        </div>

        <div class="border-t pt-8">
          <Location />
        </div>
      </div>
    </Container>
  </footer>
</template>
<script setup></script>
<style lang="scss"></style>
