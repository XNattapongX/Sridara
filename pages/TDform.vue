<template>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem; align-items: left">
      <v-col class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          เพิ่มข้อมูลใบกำกับภาษี / ใบส่งของ
        </h1>
        <v-row>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อลูกค้า</label>
            <input type="text" id="base-input" v-model="surname_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขประจำตัวผู้เสียภาษี</label>
            <input type="text" id="base-input" v-model="tax_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่</label>
            <input type="text" id="small-input" v-model="address"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สาขา
              (ไม่ต้องกรอกหากเป็นสำนักงานใหญ่)</label>
            <input type="text" id="small-input" v-model="branch_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่</label>
            <input type="text" id="small-input" v-model="id_card"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่</label>
            <a-date-picker :locale="locale" v-model:value="dob" class="date-picker" format="DD/MM/YYYY" />
          </v-col>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">กำหนดการชำระ</label>
            <a-date-picker :locale="locale" v-model:value="dob" class="date-picker" format="DD/MM/YYYY" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้ขาย
            </label>
            <input type="text" id="small-input" v-model="lastname_eng"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสลูกค้า
            </label>
            <input type="text" id="small-input" v-model="customer_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn block variant="tonal" @click="addMember" style="margin-top: 5px" color="green-accent-4">บันทึก</v-btn>
          </v-col>
        </v-row>
        <br />
      </v-col>
    </v-row>
  </div>

  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem; align-items: left">
      <v-col class="shadow-card">
        <h1 v-if="tour_detail"
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ข้อมูลลูกทัวร์ | {{ tour_detail.fields.trip_name.stringValue }}
        </h1>
        <h1 v-else
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          เพิ่มข้อมูลรายการสินค้า
        </h1>
        <v-row>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสสินค้า</label>
            <input type="text" id="base-input" v-model="surname_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายการสินค้า</label>
            <input type="text" id="small-input" v-model="address"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
            <input type="text" id="base-input" v-model="tax_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคาต่อหน่วย</label>
            <input type="text" id="base-input" v-model="tax_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนลด</label>
            <input type="text" id="base-input" v-model="tax_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษี</label>
            <input type="text" id="small-input" v-model="branch_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนเงิน</label>
            <input type="text" id="small-input" v-model="id_card"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn
              block
              variant="tonal"
              @click="addMember"
              style="margin-top: 5px"
              color="green-accent-4"
              >เพิ่มข้อมูล</v-btn>
          </v-col>
        </v-row>
        <br />
        <div class="relative overflow-x-auto" style="
                    border-radius: 0.5rem;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
                  ">
          <section class="bg-gray-50 dark:bg-gray-900">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                style="background-color: #81c784">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ลำดับ <br />
                    No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    รหัสสินค้า <br />
                    Code
                  </th>
                  <th scope="col" class="px-6 py-3">
                    รายการสินค้า <br />
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    จำนวน <br />
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ราคาต่อหน่วย <br />
                    Price /Unit
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ส่วนลด <br />
                    Discount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ภาษี <br />
                    Tax
                  </th>
                  <th scope="col" class="px-6 py-3">
                    จำนวนเงิน <br />
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in members_ls"
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
import { group_members } from "~~/services/payload";
import { read_all_data, create_data, read_one_data } from "~~/services/configs";
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
      branch: "",
      branch_name: "",
      tax_id: "",
      id_card: "",
      customer_id: "",
      bed_type: "",
      telephone_number: "",
      passport: "",
      stamp_number: "",
      address: "",
      email: "",
      dob: "",
      out: "",
      in: "",
      d_range: [],
      members_ls: [] as any,
      tour_detail: "" as any,
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
        (v: any) =>
          v.fields.tour_id.stringValue == String(this.$route.params.tourId)
      );
      this.members_ls = filter;
    });
  },
  methods: {
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
      create_data("member_tour", raw).then(() => {
        read_all_data("member_tour").then((result) => {
          const filter = result.filter(
            (v: any) =>
              v.fields.tour_id.stringValue == String(this.$route.params.tourId)
          );
          this.members_ls = filter;
        });
      });
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
}</style>
