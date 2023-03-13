<template>
  <div style="border-radius: 1rem; margin: 1rem">
    <VRow style="margin: 1rem">
      <VCol class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ใบวางบิล/ใบแจ้งหนี้
        </h1>
        <VRow>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อลูกค้า</label>
            <input type="text" id="base-input" v-model="name_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID TAX</label>
            <input type="text" id="small-input" v-model="id_tax"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ติดต่อ</label>
            <input type="text" id="base-input" v-model="contact_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
        </VRow>

        <VRow>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่</label>
            <input type="text" id="small-input" v-model="address"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
        </VRow>

        <VRow>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่</label>
            <input type="text" id="base-input" v-model="nationality"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่</label>
            <a-date-picker :locale="locale" v-model:value="dob" class="date-picker" format="DD/MM/YYYY" />
          </VCol>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสลูกค้า</label>
            <input type="text" id="small-input" v-model="telephone_number"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>

        </VRow>
        <VRow>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้เสนอขาย</label>
            <input type="text" id="small-input" v-model="telephone_number"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ฝ่าย</label>
            <input type="text" id="small-input" v-model="telephone_number"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ยืนยันราคาวันที่</label>
            <a-date-picker :locale="locale" v-model:value="dob" class="date-picker" format="DD/MM/YYYY" />
          </VCol>

        </VRow>
        <VRow>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทร</label>
            <input type="text" id="small-input" v-model="id_card"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fax</label>
            <input type="text" id="small-input" v-model="id_card"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol cols="2">
            <br />
            <VBtn block variant="tonal" @click="addMember" style="margin-top: 5px" color="green-accent-4">ยืนยัน</VBtn>
          </VCol>
        </VRow>

      </VCol>
    </VRow>
  </div>

  <div style="border-radius: 1rem; margin: 1rem">
    <VRow style="margin: 1rem">
      <VCol class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ใบวางบิล/ใบแจ้งหนี้
        </h1>
        <VRow>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสสินค้า</label>
            <input type="text" id="small-input" v-model="product_code"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายการสินค้า</label>
            <input type="text" id="base-input" v-model="product_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
            <input type="text" id="small-input" v-model="aomunt"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หน่วย</label>
            <input type="text" id="base-input" v-model="unit"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคาต่อหน่วย</label>
            <input type="text" id="small-input" v-model="unit_price"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนลด</label>
            <input type="text" id="small-input" v-model="discount"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนเงิน</label>
            <input type="text" id="small-input" v-model="telephone_number"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </VCol>
          <VCol cols="2">
            <br />
            <VBtn block variant="tonal" @click="addMember" style="margin-top: 5px" color="blue-accent-4">เพิ่มข้อมูล
            </VBtn>
          </VCol>

        </VRow>

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
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">รหัสสินค้า</th>
                  <th scope="col" class="px-6 py-3">รายการสินค้า</th>
                  <th scope="col" class="px-6 py-3">จำนวน</th>
                  <th scope="col" class="px-6 py-3">หน่วย</th>
                  <th scope="col" class="px-6 py-3">ราคาต่อหน่วย</th>
                  <th scope="col" class="px-6 py-3">ส่วนลด </th>
                  <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
                  <th scope="col" class="px-6 py-3">ภาษี</th>
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
                  <td class="px-6 py-4">
                    {{ item.fields.date_outcome.stringValue }}
                  </td>
                  <td class="px-6 py-4">{{ item.fields.dob.stringValue }}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </VCol>
    </VRow>
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
      tour_id:"",
      paper_limit: "",
      
      customer_name: "",
      contact_name: "",
      customer_address: "",
      custome_tel: "",
      customer_fax: "",
      billing_note_id: "",
      billing_note_date: "",
      customer_code: "",
      seller_name: "",
      seller_department: "",
      confirm_price_within_date: "",

      sub_total: 0,
      full_earnest_money: 0,
      taxable_value: 0,
      vat: 0,
      grand_total: 0,

      product_ls: [] as any,

      receiver_siging_name: "",
      receiver_siging_date: "",
      deliverer_siging_name: "",
      deliverer_siging_date: "",
      coordinator_siging_name: "",
      coordinator_siging_date: "",
      Authorized_person_siging_name: "",
      Authorized_person_siging_date: "",

      product_code: "",
      product_name: "",
      quantity: 0,
      unit: 0,
      unit_price: 0,
      discount: 0,
      aomunt: 0,
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
</style>
  