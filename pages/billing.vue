<template>
  <div style="display: flex; background-color: transparent">
    <div class="page">
      <v-table>
        <tr>
          <td>
            <img
              src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
              class="w-141px h-47px"
              style="margin: auto"
              alt="sridara Logo" />
          </td>
          <td>
            <v-sheet style="text-align: center; font-size: 12px">
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
          </td>
          <td>
            <v-table
              style="
                border: 1px solid black;
                margin: auto;

                text-align: center;
                font-size: 10px;
              ">
              <tr>
                <td style="font-size: 12px">ใบวางบิล/ใบแจ้งหนี้</td>
                <td>Billing Note/Invoice</td>
              </tr>
              <tr>
                <td style="font-size: 12px">ต้นฉบับ/Original</td>
                <td>เอกสารออกเป็นชุด</td>
              </tr>
            </v-table>
          </td>
        </tr>
      </v-table>
    </div>
  </div>
</template>

<style>
@page {
  size: A4;
  margin: 0;
}

* {
  box-sizing: border-box;
}
html,
body {
  background-color: rgb(225, 225, 241);
}

.page {
  width: 210mm;
  min-height: 297mm;
  padding: 10mm;
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
