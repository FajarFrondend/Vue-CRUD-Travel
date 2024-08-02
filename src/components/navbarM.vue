<template>
    <section class="navbar ">
      <div class="navigation shadow-2xl">
        <ul>
          <li class="list" :class="{ active: activeIndex === 0 }" @click="setActive(0)">
            <router-link to="/">
              <span class="icon">
                <svg class="w-7" name="home-outline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 18H9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
              <span class="text">Home</span>
            </router-link>
          </li>
          <li class="list" :class="{ active: activeIndex === 1 }" @click="setActive(1)">
            <router-link to="/rute">
              <span class="icon">
                <svg class="w-7" name="buss-outline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 2.00879C7.52043 2.04466 6.11466 2.22859 5.17157 3.17167C4 4.34324 4 6.22886 4 10.0001V12.0001C4 15.7713 4 17.657 5.17157 18.8285C6.34315 20.0001 8.22876 20.0001 12 20.0001C15.7712 20.0001 17.6569 20.0001 18.8284 18.8285C20 17.657 20 15.7713 20 12.0001V10.0001C20 6.22886 20 4.34324 18.8284 3.17167C17.8853 2.22859 16.4796 2.04466 14 2.00879" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 13H16M4 13H12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5 16H17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 16H8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 19.5V21C6 21.5523 6.44772 22 7 22H8.5C9.05228 22 9.5 21.5523 9.5 21V20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 19.5V21C18 21.5523 17.5523 22 17 22H15.5C14.9477 22 14.5 21.5523 14.5 21V20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 9H21C21.5523 9 22 9.44772 22 10V11C22 11.3148 21.8518 11.6111 21.6 11.8L20 13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 9H3C2.44772 9 2 9.44772 2 10V11C2 11.3148 2.14819 11.6111 2.4 11.8L4 13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.5 5H8.25M19.5 5H12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
              <span class="text">Rute Travel</span>
            </router-link>
          </li>
          <li class="list" :class="{ active: activeIndex === 2 }" @click="setActive(2)">
            <router-link to="#">
              <span class="icon">
                <svg class="w-7" name="cs-outline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="10" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
              <span class="text">Customer Service</span>
            </router-link>
          </li>
          <li class="list" :class="{ active: activeIndex === 3 }" @click="setActive(3)">
            <router-link to="/paket">
              <span class="icon">
                <svg viewBox="0 0 24 24" name="box-outline" class="w-7" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9844 10C21.9473 8.68893 21.8226 7.85305 21.4026 7.13974C20.8052 6.12523 19.7294 5.56066 17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.27063 5.56066 3.19479 6.12523 2.5974 7.13974C2 8.15425 2 9.41667 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C10.1779 21.5393 11.0557 22 12 22C12.9443 22 13.8221 21.5393 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C21.8226 16.1469 21.9473 15.3111 21.9844 14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
              <span class="text">Paket</span>
            </router-link>
          </li>
          <li class="list" :class="{ active: activeIndex === 4 }" @click="setActive(4)">
            <router-link to="#">
              <span class="icon">
                <svg viewBox="0 0 24 24" name="box2-outline" class="w-7" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 11.5341 9 11.3011 9.07612 11.1173C9.17761 10.8723 9.37229 10.6776 9.61732 10.5761C9.80109 10.5 10.0341 10.5 10.5 10.5H13.5C13.9659 10.5 14.1989 10.5 14.3827 10.5761C14.6277 10.6776 14.8224 10.8723 14.9239 11.1173C15 11.3011 15 11.5341 15 12C15 12.4659 15 12.6989 14.9239 12.8827C14.8224 13.1277 14.6277 13.3224 14.3827 13.4239C14.1989 13.5 13.9659 13.5 13.5 13.5H10.5C10.0341 13.5 9.80109 13.5 9.61732 13.4239C9.37229 13.3224 9.17761 13.1277 9.07612 12.8827C9 12.6989 9 12.4659 9 12Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5M3.5 7V13C3.5 16.7712 3.5 18.6569 4.67157 19.8284C5.37634 20.5332 6.3395 20.814 7.81608 20.9259" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 3H4C3.05719 3 2.58579 3 2.29289 3.29289C2 3.58579 2 4.05719 2 5C2 5.94281 2 6.41421 2.29289 6.70711C2.58579 7 3.05719 7 4 7H20C20.9428 7 21.4142 7 21.7071 6.70711C22 6.41421 22 5.94281 22 5C22 4.05719 22 3.58579 21.7071 3.29289C21.4142 3 20.9428 3 20 3H16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
              <span class="text">Pesanan</span>
            </router-link>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeIndex = ref(0)
  
  function setActive(index) {
    activeIndex.value = index
  }
  </script>
  
  <style src="@/css/navbar.css"></style>
  