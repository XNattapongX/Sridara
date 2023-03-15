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
  <v-row
    justify="space-between"
    style="
      background-color: #eceff1;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      width: 100%;
      margin: 0;
      position: fixed;
      bottom: 0;
    ">
    <v-col cols="5">
      <v-row>
        <v-col style="text-align: left"
          ><v-btn
            variant="tonal"
            color="red-accent-4"
            @click="handleDelete(tour_data.fields.trip_name.stringValue)"
            >ลบทัวร์</v-btn
          ></v-col
        ></v-row
      ></v-col
    >
    <v-col style="display: flex; align-items: center">
      <v-row justify="end">
        <v-btn
          v-if="haveQuotation"
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/quotation-paper/${$route.params.tourdataid}`)"
          >ดูใบเสนอราคา</v-btn
        >
        <v-btn
          v-else
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/qpform/${$route.params.tourdataid}`)"
          >สร้างใบเสนอราคา</v-btn
        >

        <v-btn
          v-if="haveQuotation && !haveBilling"
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="dialog = true"
          >สร้างใบแจ้งหนี้</v-btn
        >

        <v-btn
          v-else-if="haveQuotation && haveBilling"
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/billing-paper/${$route.params.tourdataid}`)"
          >ดูใบแจ้งหนี้</v-btn
        >

        <v-btn
          variant="tonal"
          style="margin-right: 1rem"
          color="light-blue-accent-4"
          v-if="haveBilling && haveQuotation && !haveTaxInvoice"
          @click="dialog2 = true"
          >สร้างใบกำกับภาษี</v-btn
        ><v-btn
          variant="tonal"
          style="margin-right: 1rem"
          color="light-blue-accent-4"
          v-else-if="haveBilling && haveQuotation && haveTaxInvoice"
          @click="$router.push(`/tax-invoice/${this.$route.params.tourdataid}`)"
          >ดูใบกำกับภาษี</v-btn
        ><v-btn
          style="margin-right: 1rem"
          variant="tonal"
          @click="$router.push(`/addusertour/${$route.params.tourdataid}`)"
          color="cyan-darken-4"
          >แก้ไขข้อมูลลูกทัวร์</v-btn
        >
        <v-btn
          style="margin-right: 1rem"
          @click="$router.push(`/edittour/${$route.params.tourdataid}`)"
          variant="tonal"
          color="cyan-darken-4"
          >แก้ไขข้อมูลทัวร์</v-btn
        ></v-row
      ></v-col
    >
  </v-row>

  <a-modal v-model:visible="dialog" title="ฟอร์มสร้างใบแจ้งหนี้/ใบวางบิล">
    <template #footer>
      <a-button key="back" @click="dialog = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="generateBilling"
        >สร้าง</a-button
      >
    </template>
    <v-row>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >เลขที่</label
        >
        <input
          type="text"
          id="base-input"
          v-model="billing.billing_note_no"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >วันที่</label
        >
        <a-date-picker
          :locale="locale"
          style="z-index: 999"
          v-model:value="billing.billing_note_date"
          class="date-picker"
          format="DD/MM/YYYY" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >หมายเลขแฟกซ์</label
        >
        <input
          type="text"
          id="base-input"
          v-model="billing.billing_note_fax"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>

  <a-modal
    v-model:visible="dialog2"
    width="65rem"
    title="ฟอร์มสร้างใบกำกับภาษี/ใบส่งของ">
    <template #footer>
      <a-button key="back" @click="dialog2 = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="generateTaxInvoice"
        >สร้าง</a-button
      >
    </template>
    <v-row>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >เลขที่</label
        >
        <input
          type="text"
          id="base-input"
          v-model="tax.tax_no"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >วันที่</label
        >
        <a-date-picker
          :locale="locale"
          style="z-index: 999"
          v-model:value="tax.tax_date"
          class="date-picker"
          format="DD/MM/YYYY" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >กำหนดการชำระ</label
        >
        <a-date-picker
          :locale="locale"
          style="z-index: 999"
          v-model:value="tax.tax_pay_date"
          class="date-picker"
          format="DD/MM/YYYY" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >สาขา (ถ้าไม่กรอกจะเป็นสำนักงานใหญ่)</label
        >
        <input
          type="text"
          id="base-input"
          v-model="tax.tax_branch"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  read_all_data,
  read_one_data,
  delete_data,
  delete_all_data_conditions,
  read_one_data_conditions,
} from "~~/services/configs";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import { create_data } from "~~/services/configs";
import { billing_note_detail, tax_invoice_detail } from "~~/services/payload";
export default {
  setup() {
    return {
      locale,
    };
  },
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
    read_one_data_conditions(
      "quotation_detail",
      "tour_id",
      this.$route.params.tourdataid
    ).then((result) => {
      if (result.length) {
        this.haveQuotation = true;
      }
    });
    read_one_data_conditions(
      "billing_note",
      "tour_id",
      this.$route.params.tourdataid
    ).then((result) => {
      if (result.length) {
        this.haveBilling = true;
      }
    });
    read_one_data_conditions(
      "tax_invoice",
      "tour_id",
      this.$route.params.tourdataid
    ).then((result) => {
      if (result.length) {
        this.haveTaxInvoice = true;
      }
    });
  },
  methods: {
    handleDelete(name) {
      Swal.fire({
        title: "คุณกำลังจะลบทัวร์",
        html: `ทัวร์ <span style="color: red">${name}</span> <br/>ข้อมูลที่เกี่ยวข้องจะถูกลบอย่างถาวร`,
        icon: "question",
        confirmButtonText: "ยืนยัน",
        showCancelButton: true,
        cancelButtonText: "ยกเลิก",
        focusConfirm: false,
      }).then((click) => {
        if (click.isConfirmed) {
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
        }
      });
    },
    validateBilling() {
      if (
        this.billing.billing_note_no == "" ||
        this.billing.billing_note_date == "" ||
        this.billing.billing_note_fax == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    generateBilling() {
      if (this.validateBilling()) {
        this.loadGenBill = true;
        const raw = billing_note_detail(
          this.$route.params.tourdataid,
          this.billing.billing_note_no,
          this.billing.billing_note_date,
          this.billing.billing_note_fax
        );
        create_data("billing_note", raw).then(() => {
          this.dialog = false;
          this.$router.push(`/billing-paper/${this.$route.params.tourdataid}`);
        });
      }
    },
    validateTax() {
      if (
        this.tax.tax_no == "" ||
        this.tax.tax_date == "" ||
        this.tax.tax_pay_date == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    generateTaxInvoice() {
      if (this.validateTax()) {
        this.loadGenBill = true;
        const raw = tax_invoice_detail(
          this.$route.params.tourdataid,
          this.tax.tax_no,
          this.tax.tax_date,
          this.tax.tax_pay_date,
          this.tax.tax_branch
        );
        create_data("tax_invoice", raw).then(() => {
          this.dialog2 = false;
          this.$router.push(`/tax-invoice/${this.$route.params.tourdataid}`);
        });
      }
    },
  },
  data() {
    return {
      tour_data: "",
      loading: true,
      haveQuotation: false,
      haveBilling: false,
      haveTaxInvoice: false,
      dialog: false,
      dialog2: false,
      loadGenBill: false,
      members_ls: [],
      hotels_ls: [],
      billing: {
        billing_note_no: "",
        billing_note_date: "",
        billing_note_fax: "",
      },
      tax: {
        tax_no: "",
        tax_date: "",
        tax_pay_date: "",
        tax_branch: "",
      },
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
.date-picker {
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
