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
          ข้อมูลทัวร์
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
              :disabled="lock_form"
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
              :disabled="lock_form"
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
              :disabled="lock_form"
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
              :disabled="lock_form"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
          ><v-col cols="2">
            <br />
            <v-btn
              variant="tonal"
              @click="addGuide"
              :disabled="lock_form"
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="(j, l) in guide_tel" :key="l">
                  <td>{{ guide_name[l] }}</td>
                  <td>{{ j }}</td>
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
              :disabled="lock_form"
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
              :disabled="lock_form"
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
              :disabled="lock_form"
              v-model:value="d_range"
              format="DD/MM/YYYY"
              style="
                height: 4.7vmin;
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
              :disabled="lock_form"
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
              :disabled="lock_form"
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
              :disabled="lock_form"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-btn
              variant="tonal"
              block
              :disabled="lock_form"
              color="green-accent-4"
              @click="addTourPackage"
              >เพิ่มทัวร์</v-btn
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
          ข้อมูลโรงแรมที่พัก
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
            :disabled="!lock_form"
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
              :disabled="!lock_form"
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
              :disabled="!lock_form"
              format="DD/MM/YYYY"
              style="
                height: 4.7vmin;
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
              :disabled="!lock_form"
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formHotel.hotel_ls" :key="index">
              <td>{{ item.fields.name.stringValue }}</td>
              <td>{{ item.fields.amount_room.stringValue }}</td>
              <td>{{ item.fields.check_in.stringValue }}</td>
              <td>{{ item.fields.check_out.stringValue }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row justify="end"
      ><v-col cols="2" style="margin-right: -10vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="deep-orange-darken-2"
          @click="$router.push('/')"
          >ไปหน้ารายการทัวร์</v-btn
        ></v-col
      ><v-col cols="2" style="margin-right: -6vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="light-blue-accent-4"
          :disabled="!lock_form"
          >ไปหน้าเพิ่มลูกทัวร์</v-btn
        ></v-col
      ></v-row
    >
  </div>
</template>
<script lang="ts">
import { group_tours, hotel_tour } from "~~/services/payload";
import { create_data, read_all_data } from "~~/services/configs";
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  setup() {
    return {
      locale,
    };
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
      d_range: [],
      d_range2: [],
      lock_form: false,
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
    addTourPackage() {
      const raw = group_tours(
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
      create_data("group_tour", raw).then((result) => {
        this.lock_form = true;
        this.tour_id = result;
      });
    },
    addHotel() {
      const raw = hotel_tour(
        this.tour_id,
        this.formHotel.name,
        this.formHotel.amount_room,
        new Date(this.formHotel.check_in),
        new Date(this.formHotel.check_out)
      );
      create_data("hotel_tour", raw).then(() => {
        read_all_data("hotel_tour").then((result) => {
          const filter = result.filter(
            (v: any) => v.fields.tour_id.stringValue == this.tour_id
          );
          this.formHotel.hotel_ls = filter;
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
