<template>
  <div>
    <div class="row">
      <h5>Visa Data <Datag></Datag></h5>
      <q-toggle v-model="drawerState" />
    </div>

    <DataVisualisering v-if="drawerState"></DataVisualisering>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import DataVisualisering from "../components/DataVisualisering.vue";
export default {
  components: {
    DataVisualisering,
  },
  setup() {
    const $store = useStore();

    const drawerState = computed({
      get: () => $store.state.example.drawerState,
      set: (val) => {
        $store.commit("example/updateDrawer", val);
      },
    });

    return {
      drawerState,
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
