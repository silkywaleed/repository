<template>
<div class="text-center absolute top-3 right-1/4 sm:right-4 z-10">
    <div class="relative inline-flex self-center">
    <div class=" text-lg w-36">
      <div
        class="flex items-center cursor-pointer justify-center px-3 py-2 bg-transparent hover-bg w-full rounded-lg"
        @click="isOptionsExpanded = !isOptionsExpanded"
      >
      <span class="flex items-center justify-center"> عربي <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt=""></span>
      </div>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
        >
          <li
            class="px-3 py-2 transition-colors duration-300 hover-bg"
          >
          <router-link to="/en-adminLogin"><span class="flex items-center justify-center"> إنجليزي <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/226-united-states_z54uak.webp" alt=""></span></router-link>
          </li>
          <li
            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
          >
          <a class="cursor-pointer"><span class="flex items-center justify-center"> عربي <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt=""></span></a>
          </li>
        </ul>
      </transition>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: "ArabicLangSwitcher",
  data() {
    return {
      isOptionsExpanded: false,
    }
  },
};
</script>
<style scoped>

.hover-bg:hover {
  background: #021DA50D !important;
  cursor: pointer;
}

</style>