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
          <v-col style="padding: 1px; margin: 0 auto"
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
                  "
                >
                  Quatation
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
                  "
                >
                  Quatation
                </td>
              </tr>
            </v-table></v-col
          >
        </v-row>

        <v-row style="padding: 1px; margin: auto">
          <v-col style="padding: 1px; height: 400px; border: 1px solid black">
            <v-table density="compact" height="300px">
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
