<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"
    style="margin-top: 1rem">
    <v-card color="teal-darken-4" v-if="loading">
      <v-card-text>
        กำลังโหลดข้อมูล กรุณารอ...
        <v-progress-circular
          style="margin-left: 1rem; margin-bottom: 0.3rem"
          indeterminate
          color="white"></v-progress-circular>
      </v-card-text>
    </v-card>
    <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
          style="background-color: #81c784">
          <tr>
            <th scope="col" class="px-6 py-3">ชื่อทริปทัวร์</th>
            <th scope="col" class="px-6 py-3">ชื่อโปรแกรมทัวร์</th>
            <th scope="col" class="px-6 py-3">วันที่เริ่มทริป</th>
            <th scope="col" class="px-6 py-3">วันที่จบทริป</th>
            <th scope="col" class="px-6 py-3">วัน</th>
            <th scope="col" class="px-6 py-3">คืน</th>
            <th scope="col" class="px-6 py-3">เที่ยวบินหรือพาหนะอื่นขาไป</th>
            <th scope="col" class="px-6 py-3">เที่ยวบินหรือพาหนะอื่นขากลับ</th>

            <th scope="col" class="px-6 py-3">จำนวนลูกทัวร์</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!tour_ls">
            <td class="px-6 py-4" colspan="12" style="text-align: center">
              ไม่มีข้อมูล
            </td>
          </tr>
          <tr
            class="table-row-hover"
            v-for="(item, index) in tour_ls"
            :key="index"
            @click="detail_tour(item.fields.id.stringValue)">
            <td class="px-6 py-4">
              {{ item.fields.trip_name.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.program_tour.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.go_date.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.back_date.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.day.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.night.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.vehicle_income.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.vehicle_outcome.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.amount_member.stringValue }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { read_all_data } from "~~/services/configs";
export default {
  mounted() {
    read_all_data("group_tour").then((result) => {
      this.tour_ls = result;
      this.loading = false;
    });
  },
  data() {
    return {
      loading: true,
      tour_ls: [],
    };
  },
  methods: {
    detail_tour(id) {
      this.$router.push({ path: `/tourdata/${id}` });
    },
  },
};
</script>

<style scoped>
.table-row-hover {
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  transition: 0.2s;
}

.table-row-hover:hover {
  background-color: rgb(236, 236, 236);
  transition: 0.2s;
}
</style>
