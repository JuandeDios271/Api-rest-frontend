<template>
  <q-page padding>
    <AddLink />
    <pre>
        {{ useLink.links }}
      </pre
    >
    <template v-for="link in useLink.links" :key="link._id">
      <LinkCard />
    </template>
  </q-page>
</template>

<script setup>
import LinkCard from "src/components/LinkCard.vue";
import { useLinkStore } from "../stores/link-store";
import AddLink from "src/components/AddLink.vue";
const useLink = useLinkStore();
//useLink.getLinks();
</script>
