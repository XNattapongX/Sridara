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
          แก้ไขข้อมูลทัวร์
        </h1>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อทริปทัวร์</label
            >
            <input
              type="text"
              v-model="tour_name"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
          ><v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อโปรแกรมทัวร์</label
            >
            <input
              type="text"
              v-model="tour_program"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
        ></v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อไกด์</label
            >
            <input
              type="text"
              id="base-input"
              v-model="g_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เบอร์โทร</label
            >
            <input
              type="text"
              v-model="g_tel"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
          ><v-col cols="2">
            <br />
            <v-btn
              variant="tonal"
              @click="addGuide"
              color="orange-lighten-1"
              style="margin-top: 5px"
              >เพิ่มไกด์</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-table
              density="compact"
              style="border: 1px solid #cfd8dc; border-radius: 0.5rem">
              <thead>
                <tr>
                  <th class="text-left">ชื่อไกด์</th>
                  <th class="text-left">เบอร์โทรไกด์</th>
                  <th class="text-center">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(j, l) in guide_tel" :key="l">
                  <td>{{ guide_name[l] }}</td>
                  <td>{{ j }}</td>
                  <td style="text-align: center; width: 10%">
                    <v-btn
                      variant="text"
                      color="red-darken-4"
                      @click="removeGuide(l)"
                      >ลบ</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนวัน</label
            >
            <input
              type="number"
              v-model.number="day"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col cols="3">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนคืน</label
            >
            <input
              type="number"
              id="small-input"
              v-model.number="night"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col
            ><label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ระยะเวลา</label
            ><a-range-picker
              :locale="locale"
              v-model:value="d_range"
              format="DD/MM/YYYY"
              style="
                height: 55%;
                background-color: #f9fafb;
                border-radius: 0.4rem;
                width: 100%;
              "
          /></v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนลูกทัวร์</label
            >
            <input
              type="number"
              v-model.number="members"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เที่ยวบินหรือพาหนะอื่นๆขาไป</label
            >
            <input
              type="text"
              id="large-input"
              v-model="vehicle_out"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เที่ยวบินหรือพาหนะอื่นๆขากลับ</label
            >
            <input
              type="text"
              v-model="vehicle_in"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-btn
              variant="tonal"
              block
              color="green-accent-4"
              @click="editTourPackage"
              >ยืนยันการแก้ไขทัวร์</v-btn
            ></v-col
          >
        </v-row>
      </v-col>

      <v-col
        style="
          border-radius: 1rem;
          margin: 1rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        ">
        <h3
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          แก้ไขข้อมูลโรงแรมที่พัก
        </h3>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >ชื่อโรงแรม</label
          >
          <input
            type="text"
            id="large-input"
            v-model="formHotel.name"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนห้องพัก</label
            >
            <input
              type="number"
              v-model.number="formHotel.amount_room"
              id="base-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col
            ><label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ระยะเวลา</label
            ><a-range-picker
              v-model:value="d_range2"
              :locale="locale"
              format="DD/MM/YYYY"
              style="
                height: 55%;
                background-color: #f9fafb;
                border-radius: 0.4rem;
                width: 100%;
              "
          /></v-col>
        </v-row>

        <v-row>
          <v-col
            ><v-btn
              variant="tonal"
              block
              @click="addHotel"
              color="teal-accent-4"
              >เพิ่มโรงแรม</v-btn
            ></v-col
          >
        </v-row>
        <br />
        <v-table
          density="compact"
          fixed-header
          height="220px"
          style="border: 1px solid #cfd8dc">
          <thead class="text-head-table">
            <tr>
              <th class="text-left">ชื่อโรงแรม</th>
              <th class="text-left">จำนวนห้องพัก</th>
              <th class="text-left">วันเช็คอินน์</th>
              <th class="text-left">วันเช็คเอ้าท์</th>
              <th class="text-left">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formHotel.hotel_ls" :key="index">
              <td>{{ item.fields.name.stringValue }}</td>
              <td>{{ item.fields.amount_room.stringValue }}</td>
              <td>{{ item.fields.check_in.stringValue }}</td>
              <td>{{ item.fields.check_out.stringValue }}</td>
              <td style="text-align: center; width: 10%">
                <v-btn
                  variant="text"
                  color="red-darken-4"
                  @click="removeHotel(item.fields.id.stringValue)"
                  >ลบ</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row justify="end"
      ><v-col cols="2" style="margin-right: -10vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="deep-purple-darken-4"
          @click="$router.push('/')"
          >ไปหน้ารายการทัวร์</v-btn
        ></v-col
      ><v-col cols="2" style="margin-right: -6vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/addusertour/${$route.params.tid}`)"
          >ไปหน้าเพิ่มลูกทัวร์</v-btn
        ></v-col
      ></v-row
    >
  </div>
</template>
<script lang="ts">
import { group_tours, hotel_tour } from "~~/services/payload";
import Swal from "sweetalert2";
import {
  read_one_data,
  create_data,
  read_all_data_conditions,
  delete_data,
  update_data,
} from "~~/services/configs";
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  setup() {
    return {
      locale,
    };
  },
  mounted() {
    read_one_data("group_tour", String(this.$route.params.tid)).then(
      (result) => {
        const field = result.fields;
        this.tour_name = field.trip_name.stringValue;
        this.tour_program = field.program_tour.stringValue;
        this.guide_name = field.guide_name.stringValue.split(", ");
        this.guide_tel = field.guide_tel.stringValue.split(", ");
        this.day = field.day.stringValue;
        this.night = field.night.stringValue;
        this.members = field.amount_member.stringValue;
        this.vehicle_in = field.vehicle_income.stringValue;
        this.vehicle_out = field.vehicle_outcome.stringValue;
        this.go_date = field.go_date.stringValue;
        this.back_date = field.back_date.stringValue;
      }
    );
    read_all_data_conditions(
      "hotel_tour",
      "tour_id",
      String(this.$route.params.tid)
    ).then((result) => {
      this.formHotel.hotel_ls = result;
    });
  },
  data() {
    return {
      tour_name: "",
      tour_program: "",
      guide_name: [] as any,
      guide_tel: [] as any,
      day: 0,
      night: 0,
      go_date: "",
      back_date: "",
      members: 0,
      vehicle_in: "",
      vehicle_out: "",
      g_name: "",
      g_tel: "",
      d_range: [] as any,
      d_range2: [],
      tour_id: "",
      formHotel: {
        name: "",
        amount_room: 0,
        check_in: "",
        check_out: "",
        hotel_ls: [] as any,
      },
    };
  },
  watch: {
    d_range(newValue) {
      this.go_date = newValue[0];
      this.back_date = newValue[1];
    },
    d_range2(newValue) {
      this.formHotel.check_in = newValue[0];
      this.formHotel.check_out = newValue[1];
    },
  },
  methods: {
    removeGuide(index: number) {
      this.guide_name.pop(index);
      this.guide_tel.pop(index);
    },
    removeHotel(id: string) {
      delete_data("hotel_tour", id).then(() => {
        read_all_data_conditions(
          "hotel_tour",
          "tour_id",
          String(this.$route.params.tid)
        ).then((result) => {
          this.formHotel.hotel_ls = result;
        });
      });
    },
    editTourPackage() {
      const raw: any = group_tours(
        this.tour_name,
        this.tour_program,
        new Date(this.go_date),
        new Date(this.back_date),
        this.day,
        this.night,
        this.vehicle_in,
        this.vehicle_out,
        this.guide_name,
        this.guide_tel,
        this.members
      );
      raw.fields.id = { stringValue: String(this.$route.params.tid) };
      update_data("group_tour", String(this.$route.params.tid), raw).then(
        () => {
          Swal.fire({
            icon: "success",
            timer: 1500,
            title: "แก้ไขข้อมูลสำเร็จ",
            showConfirmButton: false,
            timerProgressBar: true,
          });
        }
      );
    },
    addHotel() {
      const raw = hotel_tour(
        String(this.$route.params.tid),
        this.formHotel.name,
        this.formHotel.amount_room,
        new Date(this.formHotel.check_in),
        new Date(this.formHotel.check_out)
      );
      console.log(raw);
      create_data("hotel_tour", raw).then(() => {
        read_all_data_conditions(
          "hotel_tour",
          "tour_id",
          String(this.$route.params.tid)
        ).then((result) => {
          this.formHotel.hotel_ls = result;
        });
      });
    },
    addGuide() {
      if (this.g_name && this.g_tel) {
        this.guide_name.push(this.g_name);
        this.guide_tel.push(this.g_tel);
      }
      this.g_name = "";
      this.g_tel = "";
    },
  },
});
</script>
