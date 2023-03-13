<template>
  <body>
    <div class="page">
      <v-table>
        <tr>
          <td>
            <img
              src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
              class="w-141px h-47px"
              style="margin: auto"
              alt="sridara Logo"
            />
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
                padding: 10px;
                text-align: center;
                font-size: 10px;
              "
            >
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
  </body>
</template>

<style>
:root {
  --bleeding: 0.5cm;
  --margin: 0.1cm;
}

@page {
  size: A4;
  margin: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 0;
  background: rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
}

.page {
  display: inline-block;
  position: relative;
  height: 297mm;
  width: 210mm;
  font-size: 12pt;
  margin: 2em auto;
  padding: calc(var(--bleeding) + var(--margin));
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  background: white;
}

@media screen {
  .page::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: calc(100% - var(--bleeding) * 2);
    height: calc(100% - var(--bleeding) * 2);
    margin: var(--bleeding);
    pointer-events: none;
    z-index: 9999;
  }
}

@media print {
  .page {
    margin: 0;
    overflow: hidden;
  }
}
</style>
