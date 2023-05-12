<template>
  <div class="flex mt-6 font-arial text-xl">
    <div class="ml-10 flex flex-col lg:ml-48 lg:w-1/3 overflow-auto max-h-[700px]">
      <p>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
        თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად
        ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
      </p>
      <p class="mt-4">
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
        გაიშვიათდა.
      </p>
      <div class="mt-11">
        <label for="name" class="block text-xl font-bold mb-3 leading-7">
          რა სიხშირით შეიძლება გვქონდეს საერთო <br />
          არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </label>
        <div class="flex flex-col ml-6">
          <div class="flex">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">კვირაში ორჯერ</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">კვირაში ერთხელ</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">ორ კვირაში ერთხელ</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">თვეში ერთხელ</span>
          </div>
        </div>
      </div>
      <div class="mt-11">
        <label for="name" class="block text-xl font-bold mb-3 leading-7">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან <br />მუშაობას
        </label>
        <div class="flex flex-col ml-6">
          <div class="flex">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">1</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">2</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">3</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">4</span>
          </div>
          <div class="flex mt-2">
            <input type="radio" class="mr-2 w-5 accent-black" />
            <span class="ml-4 leading-7">5</span>
          </div>
        </div>
      </div>
      <div class="mt-11">
        <label for="name" class="block text-xl font-bold mb-3 leading-7">
          რას ფიქრობ ფიზიკურ შეკრებებზე
        </label>
        <div class="flex flex-col">
          <div class="flex">
            <input
              type="text"
              class="py-4 px-4 h-40 text-start border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
            />
          </div>
        </div>
      </div>
      <div class="mt-11">
        <label for="name" class="block text-xl font-bold mb-3 leading-7">
          რას ფიქრობ არსებულ გარემოზე: <br />
          რა მოგწონს, რას დაამატებდი, რას შეცვლიდი
        </label>
        <div class="flex flex-col">
          <div class="flex">
            <input
              type="text"
              class="py-4 px-4 h-40 text-start border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end mr-28 mt-16">
        <button
          class="text-white font-bold py-4 px-6 rounded-full bg-[#208298] capitalize text-lg text-white rounded-md"
        >
          დასრულება
        </button>
      </div>
    </div>
    <img src="/images/office-work.png" alt="friends" class="hidden lg:block ml-14" />
  </div>
  <div class="mt-24 mb-24 flex justify-center lg:mt-0 lg:mb-0">
    <RouterLink to="/vaccination-info" class="mr-14">
      <IconPrevious />
    </RouterLink>
  </div>
</template>
<script setup>
import IconPrevious from '@/components/icons/IconPrevious.vue'
</script>
