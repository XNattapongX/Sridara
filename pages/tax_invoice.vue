<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page">
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
                  "
                >
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
                  "
                >
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
                "
              >
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  ชื่อลูกค้า:
                </td>
                <td colspan="2">สมศรี หมีเรืองแสง</td>
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
                  15/55 ตำบลศิลา อำเภอเมือง จังหวัดของแก่น 40000
                </td>
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
                <td colspan="2" style="padding-left: 4px; font-weight: bold">
                  &nbsp;
                </td>
                <td colspan="2">&nbsp;</td>
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
                  เลขประจำตัวผู้เสียภาษี:
                </td>
                <td colspan="2">สมหอม ยอมทุกอย่าง</td>
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
                <td colspan="2">
                  <v-checkbox
                    style="height: 20px"
                    class="shrink mr-2"
                    hide-details
                    label="สำนักงานใหญ่"
                  ></v-checkbox>
                </td>
                <td colspan="2">
                  <v-checkbox
                    style="height: 40px"
                    class="shrink mr-2"
                    hide-details
                    label="สาขาที่:"
                  ></v-checkbox>
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
                  เลขที่:
                </td>
                <td>6111445875</td>
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
                <td style="padding-left: 4px; font-weight: bold">วันที่:</td>
                <td>23/04/66</td>
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
                <td style="padding-left: 4px; font-weight: bold">กำหนดชำระ:</td>
                <td>28/06/66</td>
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
                <td style="padding-left: 4px; font-weight: bold">ผู้ขาย:</td>
                <td>พร้อมใจ สมยอม</td>
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
                  รหัสลูกค้า:
                </td>
                <td>12587665</td>
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
                  ยืนยันราคาวันที่:
                </td>
                <td>12/12/67</td>
              </tr>
            </v-table></v-col
          >
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 1px; height: 400px; border: 1px solid black">
            <v-table density="compact" height="auto">
              <thead style="font-weight: bold; font-size: 14px">
                <tr>
                  <td class="text-center">ลำดับ</td>
                  <td class="text-center">รหัสสินค้า</td>
                  <td class="text-center">รายการสินค้า</td>
                  <td class="text-center">จำนวน</td>
                  <td class="text-center">ราคาต่อหน่วย</td>
                  <td class="text-center">ส่วนลด</td>
                  <td class="text-center">ภาษี</td>
                  <td class="text-center">จำนวนเงิน</td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr>
                  <td class="text-center">fdsaffs</td>
                  <td class="text-center">dasfdasf</td>
                  <td class="text-center">fasdfs</td>
                  <td class="text-center">fdsaff</td>
                  <td class="text-center">fdsafas</td>
                  <td class="text-center">dsafas</td>
                  <td class="text-center">dsafasdf</td>
                  <td class="text-center">dasfads</td>
                </tr>
                <tr>
                  <td class="text-center">fdsaffs</td>
                  <td class="text-center">dasfdasf</td>
                  <td class="text-center">fasdfs</td>
                  <td class="text-center">fdsaff</td>
                  <td class="text-center">fdsafas</td>
                  <td class="text-center">dsafas</td>
                  <td class="text-center">dsafasdf</td>
                  <td class="text-center">dasfads</td>
                </tr>
                <tr>
                  <td class="text-center">fdsaffs</td>
                  <td class="text-center">dasfdasf</td>
                  <td class="text-center">fasdfs</td>
                  <td class="text-center">fdsaff</td>
                  <td class="text-center">fdsafas</td>
                  <td class="text-center">dsafas</td>
                  <td class="text-center">dsafasdf</td>
                  <td class="text-center">dasfads</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 0">
            <v-table
              style="font-size: 12px; border: 1px solid black; padding: 2px"
            >
              <tr>
                <td style="width: 500px; font-weight: bold">หมายเหตุ:</td>
                <td style="width: 80px">รวมเงิน</td>
                <td style="width: 71px">100000</td>
              </tr>
              <tr>
                <td>
                  - หากสินค้าไม่ครบถ้วนกรุณาแจ้งกลับบริษัทฯ ภายใน 7 วัน
                  หลังจากได้รับสินค้าแล้ว มิฉะนั้นบริษัทฯ จะไม่รับผิดชอบ
                  ใดๆทั้งสิ้น
                </td>
                <td>หักส่วนลดพิเศษ</td>
                <td>150000</td>
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
                <td>10000</td>
              </tr>
              <tr>
                <td style="font-weight: bold">
                  <v-row>
                    <v-col style="margin: auto; padding: 1px" cols="3">
                      ตัวอักษร :
                    </v-col>
                    <v-col style="margin: auto; padding: 1px" cols="8">
                      ห้าพันแปดร้อยสามสิบบาทท้วน
                    </v-col>
                  </v-row>
                </td>
                <td>ภาษีมูลค่าเพิ่ม</td>
                <td>1000</td>
              </tr>
              <tr>
                <td rowspan="2">&nbsp;</td>
                <td style="font-weight: bold" rowspan="2">ยอดสุทธิ</td>
                <td rowspan="2">1000</td>
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
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td>สมหอม นอมนม</td>
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
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td>สมหอม นอมนม</td>
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
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td>สมหอม นอมนม</td>
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
              "
            >
              <v-table>
                <tr style="height: 110px">
                  <td>&nbsp;</td>
                </tr>
                <tr style="text-align: center">
                  <td>สมหอม นอมนม</td>
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
import { defineComponent } from "vue";

export default defineComponent({
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
