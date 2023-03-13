<template>
  <v-app style="margin: 2rem">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1>เพิ่มบุคลากร</h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.email"
                  variant="solo"
                  density="compact"
                  label="อีเมล"
                  :rules="[rules.required]"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="user.password"
                  variant="solo"
                  density="compact"
                  label="รหัสผ่าน"
                  :rules="[rules.required]"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.first_name"
                  variant="solo"
                  density="compact"
                  label="ชื่อ"
                  :rules="[rules.required]"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="user.last_name"
                  variant="solo"
                  density="compact"
                  label="นามสกุล"
                  :rules="[rules.required]"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.phone"
                  variant="solo"
                  density="compact"
                  label="เบอร์โทรศัพท์"
                  :rules="[rules.required]"></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  v-model="user.role"
                  variant="solo"
                  density="compact"
                  :items="roles"
                  label="สิทธิ์การใช้งาน"
                  :rules="[rules.required]"></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions style="justify-content: end">
            <v-btn color="primary" @click="saveUser" variant="tonal"
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <h1>จัดการบุคลากร</h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="search"
                  label="ค้นหา"
                  single-line
                  variant="solo"
                  density="compact"
                  hide-details
                  clearable
                  clear-icon="mdi-close-circle"
                  @click:clear="search = ''"></v-text-field>
              </v-col>
              <v-col>
                <v-btn color="primary" @click="searchUser">ค้นหา</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-table>
                  <template #headers>
                    <tr>
                      <th v-for="header in headers" :key="header.text">
                        {{ header.text }}
                      </th>
                    </tr>
                  </template>
                  <template #items>
                    <tr v-for="user in users" :key="user.email">
                      <td>{{ user.email }}</td>
                      <td>{{ user.first_name }}</td>
                      <td>{{ user.last_name }}</td>
                      <td>{{ user.phone }}</td>
                      <td>{{ user.role }}</td>
                      <td>
                        <v-btn color="primary" @click="editUser(user)"
                          >แก้ไข</v-btn
                        >
                        <v-btn color="error" @click="deleteUser(user)"
                          >ลบ</v-btn
                        >
                      </td>
                    </tr>
                  </template>
                </v-table>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addUser">เพิ่มบุคลากร</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      user: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone: "",
        role: "",
      },
      users: [],
      roles: [
        "ผู้อนุมัติ",
        "ผู้ประสานงาน",
        "ผู้ตรวจสอบ",
        "ผู้รับเงิน",
        "ผู้เสนอราคา",
      ],
      headers: [
        { text: "อีเมล", value: "email" },
        { text: "ชื่อ", value: "first_name" },
        { text: "นามสกุล", value: "last_name" },
        { text: "เบอร์โทรศัพท์", value: "phone" },
        { text: "สิทธิ์การใช้งาน", value: "role" },
        { text: "จัดการ", value: "action", sortable: false },
      ],
      search: "",
      rules: {
        required: (value: any) => !!value || "กรุณากรอกข้อมูล",
      },
    };
  },
});
</script>
