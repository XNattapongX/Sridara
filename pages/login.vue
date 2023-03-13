<template>
  <v-app style="margin-top: 1rem">
    <v-container style="margin-top: 5rem">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="3">
            <v-card-title>
              <h1 class="headline">ลงชื่อเข้าใช้ระบบ</h1>
            </v-card-title>
            <v-card-text style="margin-bottom: 0">
              <v-form>
                <v-text-field
                  density="compact"
                  variant="solo"
                  label="อีเมล"
                  type="email"
                  :error="Boolean(validate.user_msg)"
                  :error-messages="validate.user_msg"
                  v-model="email"
                  required>
                </v-text-field>
                <v-text-field
                  density="compact"
                  variant="solo"
                  label="รหัสผ่าน"
                  type="password"
                  :error="Boolean(validate.pass_msg)"
                  :error-messages="validate.pass_msg"
                  v-model="password"
                  required>
                </v-text-field>
              </v-form>
              <span>ลืมรหัสผ่าน? <a>กดตรงนี้</a></span>
            </v-card-text>
            <v-card-actions
              style="justify-content: center; margin-bottom: 0.5rem">
              <v-btn color="green-darken-3" @click="login" variant="elevated"
                >เข้าสู่ระบบ</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      validate: {
        user_msg: "",
        pass_msg: "",
      },
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(this.$auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.getIdToken().then((token) => {
            localStorage.setItem("token", token);
            this.$router.push({ path: "/" });
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/wrong-password") {
            this.validate.pass_msg = "รหัสผ่านไม่ถูกต้อง";
          } else if (
            error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-email"
          ) {
            this.validate.user_msg = "ไม่พบผู้ใช้งาน";
          }
        });
    },
  },
});
</script>
