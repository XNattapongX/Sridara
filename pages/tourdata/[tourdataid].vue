<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div v-if="tour_data" class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tr>
          <td colspan="5">
            <h3> ชื่อทริปทัวร์ : {{ tour_data.fields.trip_name.stringValue }}</h3>
          </td>
          <td colspan="2"> ชื่อไกด์ : {{ tour_data.fields.guide_name.stringValue }}</td>
          <td colspan="4"> เบอร์โทร : {{ tour_data.fields.guide_tel.stringValue }}</td>
        </tr>
        <tr>
          <td colspan="3">
            <h3> โปรแกรมทัวร์ : {{ tour_data.fields.program_tour.stringValue }}</h3>
          </td>
          <td colspan="2"> จำนวน : {{ tour_data.fields.day.stringValue }} วัน {{ tour_data.fields.night.stringValue }} คืน </td>
          <td colspan="2"> วันที่เดือนปี {{ tour_data.fields.go_date.stringValue }} ถึง {{ tour_data.fields.back_date.stringValue }} </td>
            <td colspan="4"> จำนวนลูกทัวร์ : {{ tour_data.fields.amount_member.stringValue }}</td>
        </tr>
        <tr>
          <td colspan="3">
            <h3> ชื่อโรงแรม : </h3>
          </td>
          <td colspan="2">จำนวนห้องพัก : </td>
          <td colspan="2">วันที่เช็คอินน์ :</td>
          <td colspan="4">วันที่เช็คเอ้าท์ :</td>
        </tr>
        <tr>
          <td colspan="5">
            <h3>เที่ยวบินหรือพาหนะอื่น ๆ ขาไป : {{ tour_data.fields.vehicle_income.stringValue }}</h3>
          </td>
          <td colspan="5">
            <h3>เที่ยวบินหรือพาหนะอื่น ๆ ขากลับ : {{ tour_data.fields.vehicle_outcome.stringValue }}</h3>
          </td>
        </tr>

      </table>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400" style="background-color: #81c784">
          <tr>
            <th scope="col" class="px-6 py-3">ลำดับ</th>
            <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาไทย</th>
            <th scope="col" class="px-6 py-3">หมายเลขบัตรประชาชน</th>
            <th scope="col" class="px-6 py-3">Family Name and First Name</th>
            <th scope="col" class="px-6 py-3">No.passpot</th>
            <th scope="col" class="px-6 py-3">วันที่ออก</th>
            <th scope="col" class="px-6 py-3">วันที่หมด</th>
            <th scope="col" class="px-6 py-3">ว/ด/ป เกิด</th>
            <th scope="col" class="px-6 py-3">สัญชาติ</th>
            <th scope="col" class="px-6 py-3">เพศ</th>
            <th scope="col" class="px-6 py-3">ตรวจลงตราเลขที่</th>
            <th scope="col" class="px-6 py-3">เตียง</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-row-hover" v-for="(item, index) in member_ls" :key="index">
            <td class="px-6 py-4">
              {{ index + 1 }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.thai_name.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.n_id.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.eng_name.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.p_id.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.created_at.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.expired_at.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.dob.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.nationality.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.gender.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.id.stringValue }}
            </td>
            <td class="px-6 py-4">
              {{ item.fields.bed_type.stringValue }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { read_all_data, read_one_data } from "~~/services/configs";
export default {

  mounted() {
    read_one_data("group_tour", this.$route.params.tourdataid).then((result) => {
      this.tour_data = result;
      console.log(this.tour_data);
    });
    read_all_data("member_tour").then((result) => {
      this.member_ls = result;
      // console.log(this.member_ls);
    });
  },

  data() {
    return {
      tour_data: "",
      member_ls: [],
    };
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
