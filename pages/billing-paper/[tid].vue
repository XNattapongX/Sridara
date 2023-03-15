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
                  ใบวางบิล/ใบแจ้งหนี้
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
                  Billing Note/Invoice
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
                <td
                  colspan="2"
                  style="padding-left: 4px; font-weight: bold"
                  width="25% ">
                  ชื่อลูกค้า:
                </td>
                <td colspan="2">{{ quo.customer_name.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  ID TEX:
                </td>
                <td colspan="2">{{ quo.tax_id.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                ">
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  ชื่อผู้ติดต่อ:
                </td>
                <td colspan="2">{{ quo.contact_name.stringValue }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 80px;
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
                <td style="padding-left: 4px" colspan="3">
                  <b>โทร:</b> {{ quo.contact_tel.stringValue }}
                </td>
                <td
                  style="
                    padding-left: 4px;
                    border-top: 1px none #000000;
                    border-right: 1px none #000000;
                    border-bottom: 1px none #000000;
                    border-left: 1px solid #000000;
                  ">
                  <b>Fax:</b> {{ bill.billing_note_fax.stringValue }}
                </td>
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
                  เลขที่:
                </td>
                <td>{{ bill.billing_note_no.stringValue }}</td>
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
                <td>{{ bill.billing_note_date.stringValue }}</td>
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
                  ผู้เสนอขาย:
                </td>
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
                <td style="padding-left: 4px; font-weight: bold">ฝ่าย:</td>
                <td>{{ quo.seller_department.stringValue }}</td>
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
                <td style="width: 580px; font-weight: bold">หมายเหตุ:</td>
                <td style="width: 95px">รวมเงิน</td>
                <td style="width: 71px; text-align: end">
                  {{ quo.sub_total.stringValue }} บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  1.สินค้าตามรายการข้างต้นแม้จะได้รับมอบแก่ผู้ซื้อแล้วก็ยังคงเป็นสินทรัพย์ของผู้ขายจนกว่าผู้ซื้อจะชำระเงินเรียบร้อย
                </td>
                <td>มัดจำ 100%</td>
                <td style="text-align: end">
                  {{ quo.earnest_money.stringValue }} บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  2.หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม
                  “บริษัทศรีดาราทัวร์จำกัด” และขีดฆ่าหรือผู้ถือออก
                </td>
                <td>มูลค่าคิดภาษี</td>
                <td style="text-align: end">
                  {{ quo.vat.stringValue }} บาท&nbsp;&nbsp;
                </td>
              </tr>

              <tr>
                <td>
                  3.การชำระเงินด้วยเช็คจะสมบูรณ์เมื่อ
                  บริษัทฯได้รับเงินตามเช็คเรียบร้อย
                </td>
                <td>ภาษีมูลค่าเพิ่ม</td>
                <td style="text-align: end">
                  {{ quo.product_value.stringValue }} บาท&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td style="font-weight: bold">
                  <v-row>
                    <v-col style="margin: auto; padding: 1px" cols="3">
                      ตัวอักษร :
                    </v-col>
                    <v-col style="margin: auto; padding: 1px" cols="8">
                      {{
                        ArabicNumberToText(Number(quo.grand_total.stringValue))
                      }}
                    </v-col>
                  </v-row>
                </td>
                <td>ยอดสุทธิ</td>
                <td style="text-align: end">
                  {{ quo.grand_total.stringValue }} บาท&nbsp;&nbsp;
                </td>
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
        >แก้ไขเอกสารใบแจ้งหนี้</v-btn
      ></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal v-model:visible="dialog" title="ฟอร์มสร้างแก้ไขแจ้งหนี้/ใบวางบิล">
    <template #footer>
      <a-button key="back" @click="dialog = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="updateBilling"
        >แก้ไข</a-button
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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  read_one_data_conditions,
  ArabicNumberToText,
  update_data,
} from "~~/services/configs";
import { billing_note_detail } from "~~/services/payload";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
const key = "updated";
export default defineComponent({
  setup() {
    return {
      ArabicNumberToText,
      locale,
    };
  },
  data() {
    return {
      quo: {} as any,
      bill: {} as any,
      onLoad: false,
      dialog: false,
      billing: {
        billing_note_no: "",
        billing_note_date: "",
        billing_note_fax: "",
      },
      loadGenBill: false,
    };
  },
  mounted() {
    this.$message.loading({
      content: "กำลังโหลดข้อมูลใบแจ้งหนี้ และสร้างเป็นเอกสาร",
      key,
    });
    read_one_data_conditions(
      "billing_note",
      "tour_id",
      String(this.$route.params.tid)
    ).then((res: any) => {
      this.bill = res[0].fields;
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
  methods: {
    print() {
      window.print();
    },
    validateBillingForm() {
      if (this.billing.billing_note_no == "") {
        this.$message.error("กรุณากรอกเลขที่ใบแจ้งหนี้");
        return false;
      }
      if (this.billing.billing_note_date == "") {
        this.$message.error("กรุณากรอกวันที่ใบแจ้งหนี้");
        return false;
      }
      if (this.billing.billing_note_fax == "") {
        this.$message.error("กรุณากรอกหมายเลขแฟกซ์");
        return false;
      }
      return true;
    },
    updateBilling() {
      if (this.validateBillingForm()) {
        this.loadGenBill = true;
        const raw: any = billing_note_detail(
          String(this.$route.params.tid),
          this.billing.billing_note_no,
          new Date(this.billing.billing_note_date),
          this.billing.billing_note_fax
        );
        raw.fields.id = { stringValue: this.bill.id.stringValue };
        update_data("billing_note", this.bill.id.stringValue, raw).then(
          (res: any) => {
            this.$message.success({
              content: "สำเร็จ",
              key,
              duration: 1,
            });
            this.loadGenBill = false;
            window.location.reload();
          }
        );
      }
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
.date-picker {
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
