<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111">
    <div class="page" v-if="go">
      <v-container>
        <v-row style="font-size: 12px; padding: 1px; margin: 1px auto">
          <v-col style="padding: 1px; margin: 0 auto"
            ><img
              src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
              class="w-141px h-47px"
              style="margin: auto"
              alt="sridara Logo"
          /></v-col>
          <v-col style="padding: 1px; margin: 0 auto" cols="7"
            ><v-sheet style="text-align: center; font-size: 12px">
              บริษัท ศรีดาราทัวร์ จำกัด (สำนักงานใหญ่)
              <td></td>
              123 ถนน ชยางกูร หมู่ 19 ตำบล บุ่ง อำเภอเมืองอำนาจเจริญ
              จังหวัดอำนาจเจริญ 37000
              <td></td>
              เลขประจำตัวผู้เสียภาษี0375552000037 โทร.082-3656514
              <td></td>
              www.facebook.com/sridaratourfanpage
              <td></td>
              ********************************************************
            </v-sheet>
          </v-col>

          <v-col style="padding: 1px; margin: 0 auto">
            <v-table>
              <tr style="text-align: center">
                <td
                  colspan="2"
                  style="
                    border-top: 1px solid #000000;
                    border-right: 1px solid #000000;
                    border-bottom: 1px none #000000;
                    border-left: 1px solid #000000;
                    width: 170px;
                    font-weight: bold;
                  ">
                  ใบเสนอราคา/ยืนยันการสั่งซื้อ
                </td>
              </tr>
              <tr style="text-align: center">
                <td
                  colspan="2"
                  style="
                    border-top: 1px none #000000;
                    border-right: 1px solid #000000;
                    border-bottom: 1px solid #000000;
                    border-left: 1px solid #000000;
                  ">
                  Quatation
                </td>
              </tr>
              <tr>
                <td
                  style="
                    border: 1px solid black;
                    width: 50px;
                    font-weight: bold;
                    padding: 0px 0px 0px 3px;
                  ">
                  เลขที่
                </td>
                <td style="border: 1px solid black; padding: 0px 0px 0px 3px">
                  {{ quo.no }}
                </td>
              </tr>
              <tr>
                <td
                  style="
                    border: 1px solid black;
                    width: 50px;
                    font-weight: bold;
                    padding: 0px 0px 0px 3px;
                  ">
                  วันที่
                </td>
                <td style="border: 1px solid black; padding: 0px 0px 0px 3px">
                  {{ quo.date }}
                </td>
              </tr>
            </v-table></v-col
          >
        </v-row>

        <v-row style="font-size: 12px; padding: 1px; margin: auto">
          <v-col style="padding: 0" cols="7">
            <v-table>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold" width="25% ">
                  ชื่อลูกค้า:
                </td>
                <td>{{ quo.customer_name }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">ID TEX:</td>
                <td>{{ quo.tax_id }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">
                  ชื่อผู้ติดต่อ:
                </td>
                <td>{{ quo.contact_name }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 80px;
                ">
                <td style="padding: auto; padding-left: 4px; font-weight: bold">
                  ที่อยู่:
                </td>
                <td>{{ quo.address }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">โทร:</td>
                <td>{{ quo.customer_tel }}</td>
              </tr>
            </v-table></v-col
          >
          <v-col style="padding: 0" cols="5"
            ><v-table>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold" width="40%">
                  รหัสลูกค้า:
                </td>
                <td>{{ quo.customer_code }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">
                  ผู้เสนอขาย:
                </td>
                <td>{{ quo.sales_person }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">ฝ่าย:</td>
                <td>{{ quo.sale_department }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">
                  ยืนยันราคาภายใน:
                </td>
                <td>{{ quo.confirm_price_within }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">วันส่งของ:</td>
                <td>{{ quo.delivery_date }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">Email:</td>
                <td>{{ quo.email }}</td>
              </tr>
            </v-table></v-col
          >
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 1px; height: 400px; border: 1px solid black">
            <v-table density="compact" height="397px">
              <thead
                style="
                  font-weight: bold;
                  font-size: 14px;
                  border-bottom: 1px solid black;
                ">
                <tr>
                  <td class="text-center" style="font-size: xx-small">ลำดับ</td>
                  <td class="text-center" style="font-size: xx-small">
                    รหัสสินค้า
                  </td>
                  <td class="text-left" style="font-size: xx-small">
                    รายการสินค้า
                  </td>
                  <td class="text-center" style="font-size: xx-small">จำนวน</td>
                  <td class="text-center" style="font-size: xx-small">
                    ราคาต่อหน่วย
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    ส่วนลด
                  </td>
                  <td class="text-center" style="font-size: xx-small">ภาษี</td>
                  <td class="text-center" style="font-size: xx-small">
                    จำนวนเงิน
                  </td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr v-for="(item, index) in product" :key="index">
                  <td class="text-center" style="font-size: xx-small">
                    {{ index + 1 }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.code }}
                  </td>
                  <td class="text-left" style="font-size: xx-small">
                    {{ item.name }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.qty }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.price_per_unit }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.discount }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.tax }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.amount }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 0">
            <v-table
              density="compact"
              style="font-size: 12px; border: 1px solid black; padding: 2px">
              <tr>
                <td style="width: 570px; font-weight: bold">หมายเหตุ:</td>
                <td style="width: 100px">มัดจำ</td>
                <td style="width: 76px; text-align: end">
                  {{ quo.earnest_money }}
                  บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <v-row>
                    <v-col cols="3"> กำหนดยืนราคา </v-col>
                    <v-col cols="2">
                      {{ quo.price_validate_period }}
                    </v-col>
                    <v-col cols="2"> วัน </v-col>
                  </v-row>
                </td>
                <td>รวมเงิน</td>
                <td style="text-align: end">
                  {{ quo.total_price }} บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
                  ขอขอบพระคุณมา ณ ที่นี้
                </td>
                <td>มูลค่าสินค้า</td>
                <td style="text-align: end">
                  {{ quo.net_price }}
                  บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td style="font-weight: bold">
                  ดังรายละเอียดธนาคารดังต่อไปนี้ :
                </td>
                <td>ส่วนลดสินค้า</td>
                <td style="text-align: end">
                  {{ quo.less_cash_discount }}
                  บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
                  โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน
                </td>
                <td>ภาษีมูลค่าเพิ่ม 7%</td>
                <td style="text-align: end">
                  {{ quo.vat }}
                  บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
                </td>
                <td>จำนวนเงินทั้งสิ้น</td>
                <td style="text-align: end">
                  {{ quo.total_net_price }} บาท&nbsp;&nbsp;
                </td>
              </tr>
            </v-table>
          </v-col>
        </v-row>

        <v-table style="padding: 1px; margin: auto; font-size: 11px">
          <tr
            style="
              border-top: 1px solid #000000;
              border-right: 1px solid #000000;
              border-bottom: 1px none #000000;
              border-left: 1px solid #000000;
            ">
            <td>&#32;</td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px none #000000;
                border-left: 1px solid #000000;
              ">
              &#32;
            </td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px none #000000;
                border-left: 1px solid #000000;
              ">
              &#32;
            </td>
            <td style="padding: 3px 0px 3px 3px">
              ข้าพเจ้าเห็นชอบตามรายการที่เสนอ
            </td>
          </tr>
          <tr
            style="
              border-top: 1px none #000000;
              border-right: 1px solid #000000;
              border-bottom: 1px none #000000;
              border-left: 1px solid #000000;
            ">
            <td>&#32;</td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px none #000000;
                border-left: 1px solid #000000;
              ">
              &#32;
            </td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px none #000000;
                border-left: 1px solid #000000;
              ">
              &#32;
            </td>
            <td style="padding: 0px 0px 3px 3px">
              และขอสั่งซื้อตามรายละเอียดนี้ทุกประการ
            </td>
          </tr>
          <tr>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&#32;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้เสนอราคา</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr>
              </v-table>
            </td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&#32;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้รับเงิน</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr></v-table
              >
            </td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&#32;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้ตรวจสอบ</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr></v-table
              >
            </td>
            <td
              style="
                border-top: 1px none #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&#32;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้อนุมัติสั่งซื้อ</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr></v-table
              >
            </td>
          </tr>
        </v-table>
      </v-container>
    </div>
  </div>
  <v-row
    v-if="go"
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: right">
      <v-btn color="yellow-darken-4" @click="dialog3 = true"
        >แก้ไขเอกสารใบเสนอราคา</v-btn
      ></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal
    v-model:visible="dialog3"
    title="กรุณากรอกราคาของทัวน์ใหม่ ก่อนแก้ไขใบเสนอราคา">
    <template #footer>
      <a-button key="back" @click="dialog3 = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="tour_program.loading"
        @click="onProductChange"
        >ไปหน้าแก้ไข</a-button
      >
    </template>
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
          v-model.number="tour_program.price_per_unit"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ภาษี (0% 7% 9%)</label
        >
        <select
          style="height: 55%"
          v-model="tour_program.tax"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="0%">0%</option>
          <option value="7%">7%</option>
          <option value="9%">9%</option>
        </select>
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
          v-model.number="tour_program.discount"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { read_all_data, update_data } from "~~/services/pyapi";
const key = "updatable";
export default defineComponent({
  data() {
    return {
      tour_id: "",
      quo: {} as any,
      product: [] as any,
      go: false,
      dialog3: false,
      tour_program: {
        price_per_unit: 0,
        tax: "",
        discount: 0,
        loading: false,
      },
    };
  },
  async mounted() {
    this.tour_id = String(this.$route.query.tid);
    this.$message.loading({
      content: "กำลังโหลดข้อมูลใบเสนอราคา และสร้างเป็นเอกสาร",
      key,
    });
    const data = await read_all_data(`quotations?tour_id=${this.tour_id}`);
    data.length > 0 ? (this.go = true) : (this.go = false);
    this.quo = data[0];

    const product = await read_all_data(`products?tour_id=${this.tour_id}`);
    this.product = product;
    this.tour_program.price_per_unit = product[0].price_per_unit;
    this.tour_program.tax = product[0].tax;
    this.tour_program.discount = product[0].discount;

    this.$message.success({
      content: "โหลดข้อมูลเรียบร้อยแล้ว",
      key,
      duration: 2,
    });
  },
  methods: {
    print() {
      window.print();
    },
    onProductChange() {
      let total = this.tour_program.price_per_unit;
      var amount = 0;
      if (this.tour_program.tax == "7%") {
        amount = total + total * 0.07 - this.tour_program.discount;
      } else if (this.tour_program.tax == "9%") {
        amount = total + total * 0.09 - this.tour_program.discount;
      } else {
        amount = total - this.tour_program.discount;
      }
      const payload = {
        tour_id: this.tour_id,
        code: this.product[0].code,
        name: this.product[0].name,
        price_per_unit: this.tour_program.price_per_unit,
        tax: this.tour_program.tax,
        discount: this.tour_program.discount,
        desc: this.product[0].desc,
        qty: this.product[0].qty,
        unit: this.product[0].unit,
        amount: amount,
      };
      update_data("product", this.product[0].id, payload).then(() => {
        this.$message.success({
          content: "แก้ไขข้อมูลสินค้าเรียบร้อยแล้ว",
          key,
          duration: 2,
        });
        this.$router.push(`/qpform/quoedit/${this.tour_id}`);
      });
    },
  },
});
</script>

<style scope>
@page {
  size: A4;
  margin: 0;
}

* {
  box-sizing: border-box;
}
.page {
  width: 210mm;
  min-height: 297mm;
  padding: 2mm;
  margin: 10mm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@media print {
  header {
    display: none;
  }
  .hide-btn {
    display: none;
  }
  html,
  body {
    width: 210mm;
    height: 297mm;
  }
  .page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
</style>
