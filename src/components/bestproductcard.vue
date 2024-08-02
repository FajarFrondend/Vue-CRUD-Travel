<template>
  <div class="bg-white p-3 rounded-2xl ">
      <div class="bg-emerald-600 p-2 rounded-xl h-36"></div>
      <div class="my-2 flex gap-3  text-center justify-center font-medium items-center text-sm ">
          <h1 >{{ rute.ruteAwal }}</h1>
          <span>
              <svg viewBox="0 0 48.00 48.00" class="w-3" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M42 19H5.99998" stroke="#00156b" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M30 7L42 19" stroke="#00156b" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.79897 29H42.799" stroke="#00156b" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.79895 29L18.799 41" stroke="#00156b" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          <h1 >{{ rute.ruteTujuan }}</h1>
      </div>
      <p class="w-70 truncate.. text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut tempora minima in ipsa iusto similique dolor culpa, ad fugit, quam voluptatum. Perferendis magni vero officiis sequi. Soluta, corporis esse?</p>
      <router-link :to="'rute/' + rute.id" class="flex gap-2 border border-black w-fit p-2 rounded-xl items-center mt-2">
          <span>
              <svg viewBox="0 0 24 24" class="w-4" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#001157"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17L7 7M7 7V16M7 7H16" stroke="#01004d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          <h1 class="text-sm font-medium">Pesan Sekarang</h1>
      </router-link>
  </div>

</template>

<script>
   export default {
  name: "bestproductcard",
  props: ["rute"],
};
</script>