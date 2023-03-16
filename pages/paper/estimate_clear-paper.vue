<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page">
      <v-container> </v-container>
    </div>
  </div>
  <v-row
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: center"
      ><v-btn color="light-blue-accent-4"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >
</template>
<!-- <script lang="ts">
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
</script> -->

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
