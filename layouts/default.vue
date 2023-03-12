<template>
  <header>
    <nav
      class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
      style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <div class="flex flex-wrap justify-between items-center">
        <NuxtLink to="/" class="flex items-center" style="color: back">
          <img
            src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            style="color: black"
            >ระบบจัดการข้อมูลทัวร์</span
          >
        </NuxtLink>

        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2">
          <ul
            style="margin-bottom: 0"
            class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li @click="$router.push('/')">
              <v-btn variant="flat">รายการทัวร์</v-btn>
            </li>
            <li @click="$router.push('/addtour')">
              <v-btn variant="flat">เพิ่มทัวร์</v-btn>
            </li>
            <li @click="$router.push('/')">
              <v-btn variant="flat">ใบเสนอราคา</v-btn>
            </li>
            <li @click="$router.push('/')">
              <v-btn variant="flat">ติดต่อเรา</v-btn>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initModals } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initModals();
});
</script>
