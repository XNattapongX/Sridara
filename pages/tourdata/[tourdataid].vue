<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tr>
          <td colspan="5">
            <h3> ชื่อทริปทัวร์ : </h3>
          </td>
          <td colspan="2"> ชื่อไกด์ : </td>
          <td colspan="4"> เบอร์โทร : </td>
        </tr>
        <tr>
          <td colspan="3">
            <h3> โปรแกรมทัวร์ : </h3>
          </td>
          <td colspan="2"> จำนวน : 1 วัน 18 คืน </td>
          <td colspan="2"> วันที่เดือนปี 1/1/2023 ถึง 1/2/2023 </td>
          <td colspan="4"> จำนวนลูกทัวร์ :</td>
        </tr>
        <tr>
          <td colspan="3">
            <h3> ชื่อโรงแรม :</h3>
          </td>
          <td colspan="2">จำนวนห้องพัก :</td>
          <td colspan="2">วันที่เช็คอินน์ :</td>
          <td colspan="4">วันที่เช็คเอ้าท์ :</td>
        </tr>
        <tr>
          <td colspan="5">
            <h3>เที่ยวบินหรือพาหนะอื่นๆขาไป :</h3>
          </td>
          <td colspan="5">
            <h3>เที่ยวบินหรือพาหนะอื่นๆขากลับ :</h3>
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
          <tr
          class="table-row-hover" 
          v-for="(item, index) in member_ls" 
          :key="index">
            <td class="px-6 py-4">
              {{ index+1 }}
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
import { read_all_data } from "~~/services/configs";
export default {
  mounted() {
    read_all_data("group_tour").then((result) => {
      this.tour_ls = result;
      // console.log(this.tour_ls)
    });
    read_all_data("member_tour").then((result) => {
      this.member_ls = result;
      console.log(this.member_ls);
    });
  },
  data() {
    return {
      tour_ls: [],
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
}</style>
