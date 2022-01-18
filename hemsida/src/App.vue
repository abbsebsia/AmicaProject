<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import db from "../src/boot/firebase";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  data() {
    return {};
  },
 
  
});
</script>
