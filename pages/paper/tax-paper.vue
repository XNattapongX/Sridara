<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111">
    <div class="page" v-if="onLoad">
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
            </v-sheet></v-col
          >
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
                  ใบกำกับภาษี/ใบส่งของ
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
                  Tax Invoice/Delivery Order
                </td>
              </tr>
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
                  ต้นฉบับ/Original
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
                  เอกสารออกเป็นชุด
                </td>
              </tr>
            </v-table>
          </v-col>
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
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  ชื่อลูกค้า:
                </td>
                <td colspan="2">{{ quo.customer_name.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 120px;
                ">
                <td
                  colspan="2"
                  style="padding: auto; padding-left: 4px; font-weight: bold">
                  ที่อยู่:
                </td>
                <td colspan="2">
                  {{ quo.customer_address.stringValue }}
                </td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td colspan="2" style="font-weight: bold; padding-left: 4px">
                  เลขประจำตัวผู้เสียภาษี:
                </td>
                <td colspan="2">{{ quo.tax_id.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td colspan="2">
                  <input
                    type="checkbox"
                    class="ml-5 mr-2"
                    style="
                      color: #424242;
                      margin-top: -3px;
                      border: 1px solid black;
                      border-radius: 3px;
                    "
                    id="vehicle3"
                    :checked="tax.tax_invoice_branch.stringValue == ''"
                    name="vehicle3"
                    value="Boat" />
                  <label for="vehicle3"> สำนักงานใหญ่</label>
                </td>
                <td colspan="2">
                  <input
                    type="checkbox"
                    class="mr-2"
                    :checked="tax.tax_invoice_branch.stringValue != ''"
                    style="
                      color: #424242;
                      margin-top: -3px;
                      border: 1px solid black;
                      border-radius: 3px;
                    "
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat" />
                  <label for="vehicle3">
                    สาขาที่: {{ tax.tax_invoice_branch.stringValue }}</label
                  >
                </td>
              </tr>
            </v-table>
          </v-col>
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
                  เลขที่:
                </td>
                <td>{{ tax.tax_invoice_no.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">วันที่:</td>
                <td>{{ tax.tax_invoice_date.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">กำหนดชำระ:</td>
                <td>{{ tax.tax_invoice_pay_date.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td style="padding-left: 4px; font-weight: bold">ผู้ขาย:</td>
                <td>{{ quo.seller_name.stringValue }}</td>
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
                  รหัสลูกค้า:
                </td>
                <td>{{ quo.customer_code.stringValue }}</td>
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
                  ยืนยันราคาวันที่:
                </td>
                <td>{{ quo.confirm_price_within.stringValue }}</td>
              </tr>
            </v-table></v-col
          >
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 1px; height: 400px; border: 1px solid black">
            <v-table density="compact" height="auto">
              <thead style="font-weight: bold; font-size: 14px">
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
                <tr
                  v-for="(item, index) in quo.product.arrayValue.values"
                  :key="index">
                  <td class="text-center" style="font-size: xx-small">
                    {{ index + 1 }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.mapValue.fields.product_code.stringValue }}
                  </td>
                  <td class="text-left" style="font-size: xx-small">
                    {{ item.mapValue.fields.product_name.stringValue }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.mapValue.fields.product_amount.stringValue }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{
                      item.mapValue.fields.product_price_per_unit.stringValue
                    }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.mapValue.fields.product_discount.stringValue }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.mapValue.fields.product_tax.stringValue }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.mapValue.fields.product_total.stringValue }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 0">
            <v-table
              style="font-size: 12px; border: 1px solid black; padding: 2px">
              <tr>
                <td style="width: 500px; font-weight: bold">หมายเหตุ:</td>
                <td style="width: 80px">รวมเงิน</td>
                <td style="width: 71px">{{ quo.sub_total.stringValue }}</td>
              </tr>
              <tr>
                <td>
                  - หากสินค้าไม่ครบถ้วนกรุณาแจ้งกลับบริษัทฯ ภายใน 7 วัน
                  หลังจากได้รับสินค้าแล้ว มิฉะนั้นบริษัทฯ จะไม่รับผิดชอบ
                  ใดๆทั้งสิ้น
                </td>
                <td>หักส่วนลดพิเศษ</td>
                <td>{{ quo.less_cash_discount.stringValue }}</td>
              </tr>
              <tr>
                <td>
                  -
                  กรรมสิทธิ์สินค้าตามใบส่งของนี้ยังถือว่าเป็นของผู้ขายอยู่จนกว่าผู้ซื้อจะได้ชำระเงินหรือเช็คขึ้นเงินเรียบร้อย
                </td>
                <td>มูลค่ายกเว้นภาษี</td>
                <td>200000</td>
              </tr>

              <tr>
                <td>
                  - หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม
                  “บริษัทศรีดาราทัวร์จำกัด” และขีดฆ่าหรือผู้ถือออก
                </td>
                <td>มูลค่าคิดภาษี</td>
                <td>{{ quo.vat.stringValue }}</td>
              </tr>
              <tr>
                <td style="font-weight: bold">
                  <v-row>
                    <v-col style="margin: auto; padding: 1px" cols="3">
                      ตัวอักษร :
                    </v-col>
                    <v-col style="margin: auto; padding: 1px" cols="8">
                      {{ ArabicNumberToText(quo.grand_total.stringValue) }}
                    </v-col>
                  </v-row>
                </td>
                <td>ภาษีมูลค่าเพิ่ม</td>
                <td>{{ quo.product_value.stringValue }}</td>
              </tr>
              <tr>
                <td rowspan="2">&nbsp;</td>
                <td style="font-weight: bold" rowspan="2">ยอดสุทธิ</td>
                <td rowspan="2">{{ quo.grand_total.stringValue }}</td>
              </tr>
            </v-table>
          </v-col>
        </v-row>

        <v-table style="padding: 1px; margin: auto; font-size: 11px">
          <tr>
            <td
              style="
                border-top: 1px solid #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้รับสินค้า</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr>
              </v-table>
            </td>
            <td
              style="
                border-top: 1px solid #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้ส่งสินค้า</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr></v-table
              >
            </td>
            <td
              style="
                border-top: 1px solid #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้ประสานงาน</td>
                </tr>
                <tr>
                  <td style="padding: 0px 0px 3px 3px">วันที่</td>
                </tr></v-table
              >
            </td>
            <td
              style="
                border-top: 1px solid #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              ">
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้อนุมัติ</td>
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
    v-if="onLoad"
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: right">
      <v-btn color="yellow-darken-4" @click="dialog = true"
        >แก้ไขเอกสารใบกำกับภาษี</v-btn
      ></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal
    v-model:visible="dialog"
    width="65rem"
    title="ฟอร์มแก้ไขใบกำกับภาษี/ใบส่งของ">
    <template #footer>
      <a-button key="back" @click="dialog = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="updateTaxInvoice"
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
          v-model="taxUpdate.tax_no"
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
          v-model:value="taxUpdate.tax_date"
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
          v-model:value="taxUpdate.tax_pay_date"
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
          v-model="taxUpdate.tax_branch"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>
</template>
<script lang="ts">
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import { defineComponent } from "vue";
import {
  read_one_data_conditions,
  update_data,
  ArabicNumberToText,
} from "~~/services/configs";
import { tax_invoice_detail } from "~~/services/payload";
const key = "updated";
export default defineComponent({
  setup() {
    return {
      ArabicNumberToText,
      locale,
    };
  },
  methods: {
    print() {
      window.print();
    },
    valideteTaxInvoice() {
      if (this.taxUpdate.tax_no == "") {
        this.$message.error("กรุณากรอกเลขที่ใบกำกับภาษี");
        return false;
      }
      if (this.taxUpdate.tax_date == "") {
        this.$message.error("กรุณากรอกวันที่ใบกำกับภาษี");
        return false;
      }
      if (this.taxUpdate.tax_pay_date == "") {
        this.$message.error("กรุณากรอกกำหนดการชำระใบกำกับภาษี");
        return false;
      }
      return true;
    },
    updateTaxInvoice() {
      if (this.valideteTaxInvoice()) {
        this.loadGenBill = true;
        const raw: any = tax_invoice_detail(
          String(this.$route.params.tid),
          this.taxUpdate.tax_no,
          new Date(this.taxUpdate.tax_date),
          new Date(this.taxUpdate.tax_pay_date),
          this.taxUpdate.tax_branch
        );
        raw.fields.id = { stringValue: this.tax.id.stringValue };
        update_data("tax_invoice", this.tax.id.stringValue, raw).then((res) => {
          this.$message.success({
            content: "แก้ไขข้อมูลใบกำกับภาษีเรียบร้อยแล้ว",
            key,
            duration: 2,
          });
          this.dialog = false;
          this.loadGenBill = false;
          window.location.reload();
        });
      }
    },
  },
  data() {
    return {
      dialog: false,
      onLoad: false,
      loadGenBill: false,
      quo: {} as any,
      tax: {} as any,
      taxUpdate: {
        tax_no: "",
        tax_date: "",
        tax_pay_date: "",
        tax_branch: "",
      },
    };
  },
  mounted() {
    this.$message.loading({
      content: "กำลังโหลดข้อมูลใบกำกับภาษี และสร้างเป็นเอกสาร",
      key,
    });
    read_one_data_conditions(
      "tax_invoice",
      "tour_id",
      String(this.$route.params.tid)
    ).then((res: any) => {
      this.tax = res[0].fields;
      read_one_data_conditions(
        "quotation_detail",
        "tour_id",
        String(this.$route.params.tid)
      ).then((res: any) => {
        this.onLoad = true;
        this.$message.success({
          content: "สำเร็จ",
          key,
          duration: 1,
        });
        this.quo = res[0].fields;
      });
    });
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
