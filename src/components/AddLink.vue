<script setup>
import { ref } from "vue";
import { useLinkStore } from "src/stores/link-store";
import { useNotify } from "../composables/notifyHook.js";
import { rule } from "postcss";

const useLink = useLinkStore();
const { showNotify } = useNotify();

const formAdd = ref(null);

const link = ref("");
const loading = ref(false);

const addLink = async () => {
  try {
    loading.value = true;
    await useLink.createLink(link.value);
    showNotify("Link agregado con exito", "green");
    link.value = "";
    formAdd.value.resetValidation();
  } catch (error) {
    console.log(error.errors);
    if (error.errors) {
      return error.errors.forEach((item) => {
        showNotify(item.msg);
      });
    }
    showNotify(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <q-form @submit.prevent="addLink" ref="formAdd">
    <q-input
      v-model="link"
      label="Ingrese Link Aqui"
      :rules="[
        (val) => (val && val.trim() !== '') || 'Escribe algo por favor!',
      ]"
      lazy-rules
    >
    </q-input>
    <q-btn
      class="q-mt-sm full-width"
      label="Agregrar"
      color="primary"
      type="submit"
      :loading="loading"
    ></q-btn>
  </q-form>
</template>
