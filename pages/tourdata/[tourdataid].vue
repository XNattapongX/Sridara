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
      <table
        v-if="tour_data"
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        style="background-color: #e8f5e9">
        <tr>
          <td colspan="5" class="pb-1 pt-2 px-3">
            <h3>
              ชื่อทริปทัวร์ : {{ tour_data.fields.trip_name.stringValue }}
            </h3>
          </td>
          <td colspan="2" class="pb-1 pt-2 px-3">
            ชื่อไกด์ : {{ tour_data.fields.guide_name.stringValue }}
          </td>
          <td colspan="4" class="pb-1 pt-2 px-3">
            เบอร์โทร : {{ tour_data.fields.guide_tel.stringValue }}
          </td>
        </tr>
        <tr>
          <td colspan="3" class="py-1 pt-2 px-3">
            <h3>
              โปรแกรมทัวร์ : {{ tour_data.fields.program_tour.stringValue }}
            </h3>
          </td>
          <td colspan="2" class="py-1 px-3">
            จำนวน : {{ tour_data.fields.day.stringValue }} วัน
            {{ tour_data.fields.night.stringValue }} คืน
          </td>
          <td colspan="2" class="py-1 px-3">
            วันที่เดือนปี {{ tour_data.fields.go_date.stringValue }} ถึง
            {{ tour_data.fields.back_date.stringValue }}
          </td>
          <td colspan="4" class="py-1 px-3">
            จำนวนลูกทัวร์ : {{ tour_data.fields.amount_member.stringValue }}
          </td>
        </tr>

        <tr
          style="background-color: #e1f5fe"
          v-for="(item, index) in hotels_ls"
          :key="index">
          <td colspan="3" class="py-1 px-3">
            <h3>ชื่อโรงแรม : {{ item.fields.name.stringValue }}</h3>
          </td>
          <td colspan="2" class="py-1 px-3">
            จำนวนห้องพัก : {{ item.fields.amount_room.stringValue }}
          </td>
          <td colspan="2" class="py-1 px-3">
            วันที่เช็คอินน์ : {{ item.fields.check_in.stringValue }}
          </td>
          <td colspan="4" class="py-1 px-3">
            วันที่เช็คเอ้าท์ : {{ item.fields.check_out.stringValue }}
          </td>
        </tr>

        <tr>
          <td colspan="5" class="py-1 px-3">
            <h3>
              เที่ยวบินหรือพาหนะอื่น ๆ ขาไป :
              {{ tour_data.fields.vehicle_income.stringValue }}
            </h3>
          </td>
          <td colspan="5" class="py-1 px-3">
            <h3>
              เที่ยวบินหรือพาหนะอื่น ๆ ขากลับ :
              {{ tour_data.fields.vehicle_outcome.stringValue }}
            </h3>
          </td>
        </tr>
      </table>
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        style="max-height: 400px">
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
            <th scope="col" class="px-6 py-3">ประเภทเตียง</th>
            <th scope="col" class="px-6 py-3">ตรวจลงตราเลขที</th>
          </tr>
        </thead>
        <tbody v-if="!members_ls.length">
          <tr>
            <td class="px-6 py-4" colspan="12" style="text-align: center">
              ไม่มีข้อมูล
            </td>
          </tr>
        </tbody>
        <tbody v-if="members_ls.length">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="(item, index) in members_ls"
            :key="index">
            <td class="px-6 py-4" style="font-size: 13px">{{ index + 1 }}</td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.thai_name.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.national_id.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.eng_name.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.passport_id.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.date_income.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.date_outcome.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.dob.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.nationality.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.gender.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.bed_type.stringValue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.fields.check_stamp_number.stringValue }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <v-row justify="end">
    <v-col cols="2" style="text-align: end"
      ><v-btn
        style="margin-right: -10.3rem"
        variant="tonal"
        color="red-accent-4"
        @click="handleDelete"
        >ลบทัวร์</v-btn
      ></v-col
    >
    <v-col cols="2" style="text-align: end"
      ><v-btn
        style="margin-right: -5.2rem"
        variant="tonal"
        @click="$router.push(`/addusertour/${$route.params.tourdataid}`)"
        color="lime-darken-4"
        >แก้ไขข้อมูลลูกทัวร์</v-btn
      ></v-col
    >
    <v-col
      cols="2"
      style="text-align: end"
      @click="$router.push(`/edittour/${$route.params.tourdataid}`)"
      ><v-btn style="margin-right: 1.2rem" variant="tonal" color="cyan-darken-4"
        >แก้ไขข้อมูลทัวร์</v-btn
      ></v-col
    >
  </v-row>
</template>

<script>
import {
  read_all_data,
  read_one_data,
  delete_data,
  delete_all_data_conditions,
} from "~~/services/configs";
export default {
  mounted() {
    read_one_data("group_tour", this.$route.params.tourdataid).then(
      (result) => {
        this.tour_data = result;
        this.loading = false;
      }
    );
    read_all_data("hotel_tour").then((result) => {
      const filter = result.filter(
        (v) =>
          v.fields.tour_id.stringValue == String(this.$route.params.tourdataid)
      );
      this.hotels_ls = filter;
    });
    read_all_data("member_tour").then((result) => {
      const filter = result.filter(
        (v) =>
          v.fields.tour_id.stringValue == String(this.$route.params.tourdataid)
      );
      this.members_ls = filter;
    });
  },
  methods: {
    handleDelete() {
      delete_all_data_conditions(
        "member_tour",
        "tour_id",
        this.$route.params.tourdataid
      );
      delete_all_data_conditions(
        "hotel_tour",
        "tour_id",
        this.$route.params.tourdataid
      );
      delete_data("group_tour", this.$route.params.tourdataid).then(() => {
        this.$router.push("/");
      });
    },
  },
  data() {
    return {
      tour_data: "",
      loading: true,
      members_ls: [],
      hotels_ls: [],
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
