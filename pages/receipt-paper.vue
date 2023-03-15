<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page" v-if="onLoad">
      <v-container>
        <v-row>
          <v-col cols="8"
            ><v-row
              ><v-col>
                <img
                  src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
                  class="w-141px h-47px"
                  alt="sridara Logo"
                />
                <v-sheet style="text-align: left; font-size: 12px">
                  บริษัท ศรีดาราทัวร์ จำกัด (สำนักงานใหญ่)
                  <td></td>
                  123 ถนนชยางกูร หมู่ 19 ตำบลบุ่ง อำเภอเมืองอำนาจเจริญ
                  จังหวัดอำนาจเจริญ 37000
                  <td></td>
                  เลขประจำตัวผู้เสียภาษี: 0375552000037
                  <td></td>
                  โทร.082-3656514
                  <td></td>
                  www.facebook.com/sridaratourfanpage
                </v-sheet>
              </v-col></v-row
            >
            <v-row><v-col></v-col></v-row
          ></v-col>
          <v-col cols="4"
            ><v-table>
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
                  "
                >
                  ใบเสร็จรับเงิน
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
                  "
                >
                  Receipt
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
                  "
                >
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
                  "
                >
                  เอกสารออกเป็นชุด
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
                "
              >
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
                  height: 80px;
                "
              >
                <td
                  colspan="2"
                  style="padding: auto; padding-left: 4px; font-weight: bold"
                >
                  ที่อยู่:
                </td>
                <td colspan="2">
                  {{ quo.customer_address.stringValue }}
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
                "
              >
                <td style="padding-left: 4px; font-weight: bold" width="40%">
                  วันที่รับชำระ:
                </td>
                <td>{{ dayjs(ob.receipt_date).format("DD/MM/BBBB") }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td style="padding-left: 4px; font-weight: bold">
                  เลขที่ใบเสร็จรับเงิน:
                </td>
                <td>{{ ob.receipt_no }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td style="padding-left: 4px; font-weight: bold">สาขา:</td>
                <td>{{ ob.receipt_branch }}</td>
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
                    วันที่
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    เลขที่ใบกำกับภาษี
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    รายละเอียด
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    จำนวนเงิน
                  </td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr v-for="(item, index) in ob.tax_invoice" :key="index">
                  <td class="text-center" style="font-size: xx-small">
                    {{ index + 1 }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.date }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.tax_invoice_no }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.desc }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ parseFloat(item.total).toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="font-size: 12px; padding: 1px; margin: auto">
          <v-col style="padding: 0" cols="6">
            <v-table>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  รวมทั้งสิ้น ตัวอักษร:
                </td>
                <td colspan="2">{{ ArabicNumberToText(last_total) }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td colspan="2" style="font-weight: bold; padding-left: 4px">
                  ชำระ:
                </td>
                <td colspan="2">{{ ob.receipt_pay_type }}</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: none;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td colspan="2" style="font-weight: bold; padding-left: 4px">
                  หักภาษี ณ ที่จ่าย :
                </td>
                <td colspan="2">{{ ob.receipt_tax }}</td>
              </tr>
            </v-table>
          </v-col>
          <v-col style="padding: 0" cols="6"
            ><v-table>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px none #000000;
                  height: 40px;
                "
              >
                <td style="padding-left: 4px; font-weight: bold" width="40%">
                  &nbsp;
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px none #000000;
                  height: 40px;
                "
              >
                <td style="padding-left: 4px; font-weight: bold">&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td style="padding-left: 4px; font-weight: bold">
                  เลขที่เช็ค // วันที่เช็ค
                </td>
                <td>
                  {{ ob.receipt_check_no }} //
                  {{ dayjs(ob.receipt_check_date).format("DD/MM/BBBB") }}
                </td>
              </tr>
            </v-table></v-col
          >
        </v-row>

        <v-row style="font-size: 12px; padding: 1px; margin: auto">
          <v-col style="padding: 0">
            <v-table
              ><tr
                style="
                  border-top: 1px solid #000000;
                  border-right: 1px solid #000000;
                  border-bottom: 1px solid #000000;
                  border-left: 1px solid #000000;
                  height: 40px;
                "
              >
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  หมายเหตุ :
                  ใบเสร็จรับเงินฉบับนี้จะสมบูรณ์ต่อเมื่อได้รับเงินตามเช็คเรียบร้อยและต้องมีลายมือชื่อกรรมการ
                  ผู้มีอำนาจหรือผู้แทนที่ถูกต้องและผู้รับเงิน
                </td>
              </tr></v-table
            >
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
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>ผู้จัดทำ</td>
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
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
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
                border-top: 1px solid #000000;
                border-right: 1px solid #000000;
                border-bottom: 1px solid #000000;
                border-left: 1px solid #000000;
                width: 187px;
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                </tr>
                <tr style="text-align: center">
                  <td>กรรมการผู้มีอำนาจหรือตัวแทน</td>
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
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: center"
      ><v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >
</template>
<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
import buddhistEra from "dayjs/plugin/buddhistEra";
import {
  read_one_data_conditions,
  ArabicNumberToText,
} from "~~/services/configs";
export default defineComponent({
  setup() {
    dayjs.extend(buddhistEra);
    return {
      dayjs,
      ArabicNumberToText,
    };
  },
  mounted() {
    const obj = JSON.parse(String(this.$route.query.data));
    this.ob = obj;

    this.last_total = obj.tax_invoice.reduce(
      (a: any, b: any) => Number(a) + Number(b.total),
      0
    );
    console.log(this.last_total);
    read_one_data_conditions(
      "quotation_detail",
      "tour_id",
      obj.tax_invoice[0].tour_id
    ).then((res) => {
      this.onLoad = true;
      this.quo = res[0].fields;
    });
  },
  data() {
    return {
      onLoad: false,
      quo: {} as any,
      ob: {} as any,
      last_total: 0,
    };
  },
  methods: {
    print() {
      window.print();
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
