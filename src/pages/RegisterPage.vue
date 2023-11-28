<script setup>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import { ref } from "vue";
import { useUserStore } from "../stores/user-store";
const $q = useQuasar();

const userStore = useUserStore();
const router = useRouter();
const email = ref("juangarcia1@test.com");
const password = ref("123123");
const repassword = ref("123123");

const handleSubmit = async () => {
  try {
    console.log("paso las vali");
    await userStore.register(email.value, password.value, repassword.value);
    router.push("/");
    email.value = "";
    password.value = "";
  } catch (error) {
    console.log("error", error);
    alertDialogBackend(error.error);
  }
};

const alertDialogBackend = (message = "ERROR EN EL SERVIDOR") => {
  $q.dialog({
    title: "ERROR",
    message,
  });
};
</script>

<template>
  <q-page class="row justify-center">
    <div class="col-12 col-sm-6 col-md-5">
      <h3>Register</h3>
      <q-form @submit.prevent="handleSubmit">
        <q-input
          v-model="email"
          label="Ingrese E-mail"
          type="text"
          :rules="[
            (val) =>
              (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
              'Formato de E-mail incorrecto',
          ]"
        ></q-input>

        <q-input
          v-model="password"
          label="Ingrese contraseña"
          type="password"
          :rules="[
            (val) =>
              (val && val.length > 5) || 'Contraseña minimo 6 caracteres',
          ]"
        ></q-input>

        <q-input
          v-model="repassword"
          label="Repita contraseña"
          type="password"
          :rules="[
            (val) =>
              (val && val === password) || 'No coinciden las contraseñas',
          ]"
        ></q-input>

        <div>
          <q-btn label="Login" type="submit"></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>
