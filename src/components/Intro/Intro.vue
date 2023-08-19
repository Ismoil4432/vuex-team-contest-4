<template>
  <section class="intro bg-[#F1F0EE]">
    <Container class="px-[32px] pt-[116px]">
      <div class="max-w-[325px] mb-[70px]">
        <div class="mb-[20px]">
          <p class="font-bold text-[40px] leading-[56px] text-black">
            Kasblarni
          </p>
          <p class="font-bold text-[40px] leading-[56px] text-black">
            <span class="text-[#BA8D5B]">“Najot Ta’lim”</span
            ><span class="">da</span>
            <!-- <span class="text-[#BA8D5B]">mutaxassislardan</span> -->
            <!-- <span class="text-[#BA8D5B]">onlayn</span> -->
            <!-- <span class="text-[#BA8D5B]">istalgan nuqtadan</span> -->
          </p>
          <p class="font-bold text-[40px] leading-[56px] text-black">
            o‘rganing
          </p>
        </div>

        <p class="font-semibold text-[18px] leading-[22px] text-[#607987]">
          O‘zingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni
          o‘rganing.
        </p>
      </div>

      <a
        class="font-bold text-[16px] leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-[45px] py-[12px] rounded-full"
        href="/courses"
      >
        <span>Kurslarni ko‘rish</span>
      </a>
    </Container>
  </section>
</template>
<script setup></script>
<style lang="scss">
.intro {
  background-image: url("/images/bg-hero.png"), url("/images/bg-hero.svg");
  background-repeat: no-repeat;
  background-position: bottom 0 right 27%, calc(50% + 270px) calc(50% + 47px);
  background-size: 650px 450px, contain;
  padding-bottom: 60px;
}

@media (max-width: 1150px) {
  .intro {
    background-position: bottom 0 right 12%, calc(50% + 270px) calc(50% + 47px);
    background-size: 500px 340px, 760px 450px;
  }
}

@media (max-width: 1024px) {
  .intro {
    background-position: bottom 0 right 12%, calc(50% + 270px) calc(50% + 47px);
    background-size: 400px 270px, 660px 450px;
  }
}

@media (max-width: 768px) {
  .intro {
    background-position: bottom 0 right 12%, calc(50% + 220px) calc(50% + 110px);
    background-size: 300px 200px, 560px;
  }
}
</style>
