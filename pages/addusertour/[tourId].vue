<template>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem">
      <v-col
        style="
          border-radius: 1rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
          margin: 1rem;
        ">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ข้อมูลลูกทัวร์ {{ $route.params.tourId }}
        </h1>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อ</label
            >
            <input
              type="text"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >นามสกุล</label
            >
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Surname</label
            >
            <input
              type="text"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Lastname</label
            >
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >สัญชาติ</label
            >
            <input
              type="text"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เพศ</label
            >
            <input
              type="text"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >หมายเลขบัตรประชาชน</label
            >
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >วัน เดือน ปี เกิด</label
            >
            <a-date-picker
              :locale="locale"
              style="
                height: 4.7vmin;
                background-color: #f9fafb;
                border-radius: 0.4rem;
                width: 100%;
              "
              format="DD/MM/YYYY" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เบอร์โทรศัพท์</label
            >
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              หมายเลขพาสปอร์ต</label
            >
            <input
              type="text"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ตรวจลงตราเลขที่</label
            >
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              วันที่ออก - วันที่หมด</label
            >
            <a-range-picker
              :locale="locale"
              format="DD/MM/YYYY"
              style="
                height: 4.7vmin;
                background-color: #f9fafb;
                border-radius: 0.4rem;
                width: 100%;
              " />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ที่อยู่</label
            >
            <input
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn
              block
              variant="tonal"
              style="margin-top: 5px"
              color="red-accent-4"
              >เพิ่มลูกทัวร์</v-btn
            >
          </v-col>
        </v-row>
        <br />
        <div
          class="relative overflow-x-auto"
          style="
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
              rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
          ">
          <section class="bg-gray-50 dark:bg-gray-900">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                style="background-color: #81c784">
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาไทย</th>
                  <th scope="col" class="px-6 py-3">หมายเลขบัตรประชาชน</th>
                  <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาอังกฤษ</th>
                  <th scope="col" class="px-6 py-3">หมายเลขพาสปอร์ต</th>
                  <th scope="col" class="px-6 py-3">วันที่ออก</th>
                  <th scope="col" class="px-6 py-3">วันที่หมด</th>
                  <th scope="col" class="px-6 py-3">ว/ด/ป เกิด</th>
                  <th scope="col" class="px-6 py-3">สัญชาต</th>
                  <th scope="col" class="px-6 py-3">เพศ</th>
                  <th scope="col" class="px-6 py-3">ตรวจลงตราเลขที</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                  <td class="px-6 py-4">#</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  setup() {
    return {
      locale,
    };
  },
});
</script>
