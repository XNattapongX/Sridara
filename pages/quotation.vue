<template>
  <v-card class="v-card-main" variant="outlined">
    <v-container>
      <v-row no-gutters class="v-row-text">
        <v-col cols="auto">
          <img
            src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
            class="mr-3 h-12 sm:h-15"
            alt="Flowbite Logo"
          />
        </v-col>
        <v-col cols="7">
          <v-sheet class="pa-2 ma-2" style="text-align: center">
            บริษัท ศรีดาราทัวร์ จำกัด (สำนักงานใหญ่)
            <td></td>
            123 ถนน ชยางกูร หมู่ 19 ตำบล บุ่ง อำเภอเมืองอำนาจเจริญ
            จังหวัดอำนาจเจริญ 37000
            <td></td>
            เลขประจำตัวผู้เสียภาษี0375552000037 โทร.082-3656514
            www.facebook.com/sridaratourfanpage
            <td></td>
            ********************************************************
          </v-sheet>
        </v-col>

        <v-col cols="auto">
          <v-table>
            <td style="text-align: center">
              <tr>
                ใบเสนอราคา/ยืนยันการสั่งซื้อ
              </tr>
              <tr>
                Quatation
              </tr>
            </td>
          </v-table>
          <v-table>
            <td>
              <tr>
                เลขที่
              </tr>
              <tr>
                วันที่
              </tr>
            </td>
            <td>
              <tr>
                184648456
              </tr>
              <tr>
                20/02/66
              </tr>
            </td>
          </v-table>
        </v-col>
      </v-row>

      <v-table style="font-size: 1.2rem">
        <td>
          <tr>
            ชื่อลูกค้า:
          </tr>
          <tr>
            ID TEX:
          </tr>
          <tr>
            ชื่อผู้ติดต่อ:
          </tr>
          <tr>
            ที่อยู่:
          </tr>
        </td>
        <td>
          <tr>
            สมศรี หมีเรืองแสง
          </tr>
          <tr>
            1150
          </tr>
          <tr>
            สมหอม ยอมทุกอย่าง
          </tr>
          <tr>
            15/55 ตำบลศิลา อำเภอเมือง จังหวัดของแก่น 40000
          </tr>
        </td>
        <td>
          <tr>
            รหัสลูกค้า:
          </tr>
          <tr>
            ผู้เสนอขาย:
          </tr>
          <tr>
            ฝ่าย:
          </tr>
          <tr>
            ยืนยันราคาภายใน:
          </tr>
          <tr>
            วันที่ส่งของ:
          </tr>
        </td>
        <td>
          <tr>
            6111445875
          </tr>
          <tr>
            สมัครใจ จำยอม
          </tr>
          <tr>
            หาของ
          </tr>
          <tr>
            20/05/66
          </tr>
          <tr>
            20/07/66
          </tr>
        </td>
      </v-table>

      <v-table style="font-size: 1.2rem; margin-top: 2rem">
        <td>โทร:</td>
        <td>0661252578</td>
        <td>Email:</td>
        <td>st@mail.com</td>
      </v-table>

      <v-table class="v-text-table" fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-left">ลำดับ</th>
            <th class="text-left">รหัสสินค้า</th>
            <th class="text-left">รายการสินค้า</th>
            <th class="text-left">จำนวน</th>
            <th class="text-left">ราคาต่อหน่วย</th>
            <th class="text-left">ส่วนลด</th>
            <th class="text-left">ภาษี</th>
            <th class="text-left">จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customers" :key="item.name">
            <td>{{ item.no }}</td>
            <td>{{ item.product_code }}</td>
            <td>{{ item.product_name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.unit_price }}</td>
            <td>{{ item.discount }}</td>
            <td>{{ item.tax }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-card variant="none">
        <v-card-title>หมายเหตุ:</v-card-title>
        <v-card-item>
          <v-row no-gutters>
            <v-col cols="9">
              <sheet class="pa-2 ma-2" style="font-size: 18px">
                <p>กำหนดยืนราคา ...................... วัน</p>
                <p>
                  จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
                </p>
                <p>ขอขอบพระคุณมา ณ ที่นี้ ดังรายละเอียดธนาคารดังต่อไปนี้ :</p>
                <p>
                  1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
                  โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน
                </p>
                <p>
                  2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
                </p>
              </sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2" style="font-size: 18px">
                <p>มัดจำ ................ 3000</p>
                <p>รวมเงิน ...............15000</p>
                <p>ส่วนลดสินค้า ..........300</p>
                <p>มูลค่าสินค้า ............147000</p>
                <p>ภาษีมูลค่าเพิ่ม 7 % ......1347</p>
                <p>จำนวนเงินทั้งสิ้น ........15047</p>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>

      <v-table style="text-align: right; margin-right: 3vmin">
        <tr>
          <td>
            <p>ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ</p>
            <p>ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ</p>
          </td>
        </tr>
      </v-table>

      <v-card variant="none">
        <v-row style="text-align: center">
          <v-col style="display: flex; flex-direction: column">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8A%E0%B8%B2_%E0%B8%AA%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C.png"
              class="h-12 sm:h-15"
              alt="Flowbite Logo"
            /><v-sheet> ผู้เสนอราคา </v-sheet>
          </v-col>
          <v-col style="display: flex; flex-direction: column"
            ><img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8A%E0%B8%B2_%E0%B8%AA%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C.png"
              class="h-12 sm:h-15"
              alt="Flowbite Logo"
            />
            <v-sheet> ผู้รับเงิน </v-sheet>
          </v-col>
          <v-col style="display: flex; flex-direction: column"
            ><img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8A%E0%B8%B2_%E0%B8%AA%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C.png"
              class="h-12 sm:h-15"
              alt="Flowbite Logo"
            />
            <v-sheet> ผู้ตรวจสอบ </v-sheet>
          </v-col>
          <v-col style="display: flex; flex-direction: column"
            ><img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8A%E0%B8%B2_%E0%B8%AA%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C.png"
              class="h-12 sm:h-15"
              alt="Flowbite Logo"
            />
            <v-sheet> ผู้อนุมัติสั่งซื้อ </v-sheet></v-col
          >
        </v-row>
        <v-row style="text-align: center">
          <v-col> <v-sheet> วันที่ 12/02/66</v-sheet> </v-col>
          <v-col> <v-sheet> วันที่ 12/02/66</v-sheet> </v-col>
          <v-col> <v-sheet> วันที่ 12/02/66</v-sheet> </v-col>
          <v-col> <v-sheet> วันที่ 12/02/66</v-sheet></v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-card>
</template>

<style scoped>
.v-card-main {
  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 5rem;
  border-radius: 10px;
  border: 3px solid black;
}
.v-row-text {
  font-size: 18px;
}
.v-text-table {
  font-size: 18px;
}
</style>

<script>
export default {
  data() {
    return {
      customers: [
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
        {
          no: "1",
          product_code: "123",
          product_name: "F",
          quantity: "20",
          unit_price: "10",
          discount: "5",
          tax: "3",
          price: 15,
        },
      ],
    };
  },
};
</script>
