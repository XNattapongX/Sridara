<template>
  <div style="border-radius: 1rem">
    <v-row>
      <v-col class="shadow-card">
        <h1
          v-if="tour_detail"
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ข้อมูลลูกทัวร์ | {{ tour_detail.fields.trip_name.stringValue }}
        </h1>
        <h1
          v-else
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Loading...
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
              v-model="surname_thai"
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
              v-model="lastname_thai"
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
              v-model="surname_eng"
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
              v-model="lastname_eng"
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
              v-model="nationality"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เพศ</label
            >
            <select
              style="height: 55%"
              v-model="gender"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
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
              v-model="id_card"
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
              v-model:value="dob"
              class="date-picker"
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
              v-model="telephone_number"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ประเภทเตียง</label
            >
            <select
              style="height: 55%"
              v-model="bed_type"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="เดี่ยว">เตียงเดี่ยว</option>
              <option value="คู่">เตียงคู่</option>
            </select>
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
              v-model="passport"
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
              v-model="stamp_number"
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
              v-model:value="d_range"
              format="DD/MM/YYYY"
              style="
                height: 55%;
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
              >ที่อยู่ตามบัตรประชาชน</label
            >
            <input
              type="text"
              id="small-input"
              v-model="address"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn
              block
              variant="tonal"
              @click="addMember"
              style="margin-top: 5px"
              color="light-blue-darken-4"
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
                  <th scope="col" class="px-6 py-3">ประเภทเตียง</th>
                  <th scope="col" class="px-6 py-3">ตรวจลงตราเลขที</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!members_ls.length">
                  <td class="px-6 py-4" colspan="12" style="text-align: center">
                    ไม่มีข้อมูล
                  </td>
                </tr>
                <tr
                  class="table-row-hover"
                  v-for="(item, index) in members_ls"
                  @click="
                    deleteAlert(
                      item.fields.id.stringValue,
                      item.fields.thai_name.stringValue
                    )
                  "
                  :key="index">
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td class="px-6 py-4">
                    {{ item.fields.thai_name.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.national_id.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.eng_name.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.passport_id.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.date_income.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.date_outcome.stringValue }}
                  </td>
                  <td class="px-6 py-4">{{ item.fields.dob.stringValue }}</td>
                  <td class="px-6 py-4">
                    {{ item.fields.nationality.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.gender.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.bed_type.stringValue }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.fields.check_stamp_number.stringValue }}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import { group_members } from "~~/services/payload";
import {
  read_all_data,
  create_data,
  read_one_data,
  delete_data,
} from "~~/services/configs";
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  data() {
    return {
      surname_thai: "",
      lastname_thai: "",
      surname_eng: "",
      lastname_eng: "",
      nationality: "",
      gender: "",
      id_card: "",
      bed_type: "",
      telephone_number: "",
      passport: "",
      stamp_number: "",
      address: "",
      dob: "",
      out: "",
      in: "",
      d_range: [],
      members_ls: [],
      tour_detail: "",
    };
  },
  watch: {
    d_range(newValue) {
      this.in = newValue[0];
      this.out = newValue[1];
    },
  },
  setup() {
    return {
      locale,
    };
  },
  mounted() {
    read_one_data("group_tour", String(this.$route.params.tourId)).then(
      (result) => {
        this.tour_detail = result;
      }
    );
    read_all_data("member_tour").then((result) => {
      const filter = result.filter(
        (v) => v.fields.tour_id.stringValue == String(this.$route.params.tourId)
      );
      this.members_ls = filter;
    });
  },
  methods: {
    deleteAlert(id, name) {
      Swal.fire({
        title: "คุณกำลังจะลบลูกทัวร์",
        html: `รายชื่อ <span style="color: red">${name}</span> จะถูกลบอย่างถาวร`,
        icon: "question",
        confirmButtonText: "ยืนยัน",
        showCancelButton: true,
        cancelButtonText: "ยกเลิก",
        focusConfirm: false,
      }).then((click) => {
        if (click.isConfirmed) {
          delete_data("member_tour", id).then(() => {
            read_all_data("member_tour").then((result) => {
              if (result) {
                const filter = result.filter(
                  (v) =>
                    v.fields.tour_id.stringValue ==
                    String(this.$route.params.tourId)
                );
                this.members_ls = filter;
              } else {
                this.members_ls = [];
              }
            });
          });
        }
      });
    },
    validateMember() {
      if (this.surname_thai == "") {
        this.$message.error("กรุณากรอกชื่อ (ไทย)");
        return false;
      } else if (this.lastname_thai == "") {
        this.$message.error("กรุณากรอกนามสกุล (ไทย)");
        return false;
      } else if (this.surname_eng == "") {
        this.$message.error("กรุณากรอกชื่อ (อังกฤษ)");
        return false;
      } else if (this.lastname_eng == "") {
        this.$message.error("กรุณากรอกนามสกุล (อังกฤษ)");
        return false;
      } else if (this.id_card == "") {
        this.$message.error("กรุณากรอกเลขบัตรประชาชน");
        return false;
      } else if (this.bed_type == "") {
        this.$message.error("กรุณาเลือกประเภทเตียง");
        return false;
      } else if (this.passport == "") {
        this.$message.error("กรุณากรอกเลขที่หนังสือเดินทาง");
        return false;
      } else if (this.in == "") {
        this.$message.error("กรุณาเลือกวันเข้าพัก");
        return false;
      } else if (this.out == "") {
        this.$message.error("กรุณาเลือกวันออกพัก");
        return false;
      } else if (this.dob == "") {
        this.$message.error("กรุณาเลือกวันเกิด");
        return false;
      } else if (this.nationality == "") {
        this.$message.error("กรุณากรอกสัญชาติ");
        return false;
      } else if (this.gender == "") {
        this.$message.error("กรุณาเลือกเพศ");
        return false;
      } else if (this.address == "") {
        this.$message.error("กรุณากรอกที่อยู่");
        return false;
      } else if (this.stamp_number == "") {
        this.$message.error("กรุณากรอกเลขที่ใบอนุญาต");
        return false;
      } else {
        return true;
      }
    },
    addMember() {
      const raw = group_members(
        String(this.$route.params.tourId),
        `${this.surname_thai} ${this.lastname_thai}`,
        `${this.surname_eng} ${this.lastname_eng}`,
        this.id_card,
        this.bed_type,
        this.passport,
        new Date(this.in),
        new Date(this.out),
        new Date(this.dob),
        this.nationality,
        this.gender,
        this.address,
        this.stamp_number
      );
      if (this.validateMember()) {
        create_data("member_tour", raw).then(() => {
          read_all_data("member_tour").then((result) => {
            const filter = result.filter(
              (v) =>
                v.fields.tour_id.stringValue ==
                String(this.$route.params.tourId)
            );
            this.members_ls = filter;
          });
        });
      }
    },
  },
});
</script>
<style scoped>
.shadow-card {
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin: 1rem;
}
.date-picker {
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
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
