<template>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem">
      <v-col class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ใบเสนอราคา/ยืนยันการสั่งซื้อ
        </h1>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อลูกค้า</label
            >
            <input
              type="text"
              id="base-input"
              v-model="customer_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เลขกำกับภาษี</label
            >
            <input
              type="text"
              id="base-input"
              v-model="tax_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อผู้ติดต่อ</label
            >
            <input
              type="text"
              id="base-input"
              v-model="contact_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
              v-model="customer_address"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รหัสลูกค้า</label
            >
            <input
              type="text"
              id="small-input"
              v-model="customer_code"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ยืนยันราคาภายใน</label
            >
            <a-date-picker
              :locale="locale"
              v-model:value="confirm_price_within"
              class="date-picker"
              format="DD/MM/YYYY" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >วันที่ส่งของ</label
            >
            <a-date-picker
              :locale="locale"
              v-model:value="delivery_date"
              class="date-picker"
              format="DD/MM/YYYY" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ผู้เสนอขาย</label
            >
            <input
              type="text"
              id="small-input"
              v-model="sales_person"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ฝ่าย</label
            >
            <input
              type="text"
              id="base-input"
              v-model="sale_department"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เบอร์โทรศัพท์</label
            >
            <input
              type="text"
              id="small-input"
              v-model="contact_tel"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >อีเมล</label
            >
            <input
              type="text"
              id="small-input"
              v-model="contact_email"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem">
      <v-col class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ใบเสนอราคา/ยืนยันการสั่งซื้อ
        </h1>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รหัสสินค้า</label
            >
            <input
              type="text"
              id="small-input"
              v-model="product_code"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รายการสินค้า</label
            >
            <input
              type="text"
              id="base-input"
              v-model="product_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวน</label
            >
            <input
              type="text"
              id="small-input"
              v-model="product_amount"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ราคาต่อหน่วย</label
            >
            <input
              type="text"
              id="base-input"
              v-model="product_price_per_unit"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ส่วนลด</label
            >
            <input
              type="text"
              id="base-input"
              v-model="product_discount"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ภาษี</label
            >
            <input
              type="text"
              id="small-input"
              v-model="product_tax"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนเงิน</label
            >
            <input
              type="text"
              id="small-input"
              v-model="product_total"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn
              block
              variant="tonal"
              @click="onAddProduct"
              style="margin-top: 5px"
              color="blue-accent-4"
              >เพิ่มข้อมูล</v-btn
            >
          </v-col>
        </v-row>

        <br /><br />
        <div class="relative overflow-x-auto shadow">
          <section class="bg-gray-50 dark:bg-gray-900">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                style="background-color: #81c784">
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">รหัสสินค้า</th>
                  <th scope="col" class="px-6 py-3">รายการสินค้า</th>
                  <th scope="col" class="px-6 py-3">จำนวน</th>
                  <th scope="col" class="px-6 py-3">ราคาต่อหน่วย</th>
                  <th scope="col" class="px-6 py-3">ส่วนลด</th>
                  <th scope="col" class="px-6 py-3">ภาษี</th>
                  <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="(item, index) in product_ls"
                  :key="index">
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td class="px-6 py-4">
                    {{ item.product_code }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.product_name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.product_amount }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.product_price_per_unit }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.product_discount }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.product_tax }}
                  </td>
                  <td class="px-6 py-4">{{ item.product_total }}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <v-col cols="2">
          <br />
          <v-btn
            block
            variant="tonal"
            @click="onAddQuotation"
            style="margin-top: 5px"
            color="green-accent-4"
            >ยืนยัน</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { read_all_data, create_data, genRanDec } from "~~/services/configs";
import { quotation_detail_with_product } from "~~/services/payload";
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  data() {
    return {
      customer_name: "",
      tax_id: "",
      contact_name: "",
      customer_address: "",
      customer_code: "",
      confirm_price_within: "",
      sales_person: "",
      sale_department: "",
      contact_tel: "",
      contact_email: "",
      delivery_date: "",
      product_code: "",
      product_name: "",
      product_amount: "",
      product_price_per_unit: "",
      product_discount: "",
      product_tax: "",
      product_total: "",
      product_ls: [] as any,
    };
  },
  setup() {
    return {
      locale,
    };
  },
  methods: {
    onAddProduct() {
      this.product_ls.push({
        product_code: this.product_code,
        product_name: this.product_name,
        product_amount: this.product_amount,
        product_price_per_unit: this.product_price_per_unit,
        product_discount: this.product_discount,
        product_tax: this.product_tax,
        product_total: this.product_total,
      });
      this.product_code = "";
      this.product_name = "";
      this.product_amount = "";
      this.product_price_per_unit = "";
      this.product_discount = "";
      this.product_tax = "";
      this.product_total = "";
    },
    onAddQuotation() {
      const json = quotation_detail_with_product(
        String(this.$route.params.tid),
        genRanDec(5),
        new Date(),
        this.tax_id,
        this.customer_name,
        this.customer_address,
        this.customer_code,
        this.contact_name,
        this.contact_tel,
        this.contact_email,
        this.sales_person,
        this.sale_department,
        new Date(this.confirm_price_within),
        new Date(this.delivery_date),
        this.product_ls,
        0,
        "6",
        100,
        20,
        100,
        100,
        1000,
        "",
        new Date(),
        "",
        new Date(),
        "",
        new Date(),
        "",
        new Date()
      );
      create_data("quotation_detail", json).then((res) => {
        console.log(res);
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
}
.shadow {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
</style>
