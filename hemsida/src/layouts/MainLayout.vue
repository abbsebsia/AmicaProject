<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> amica </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import db from "../boot/firebase";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MainLayout",
  components: {},
  setup() {
    const $store = useStore();

    const bil = computed({
      get: () => $store.state.example.bil,
      set: (val) => {
        $store.commit("example/bil", val);
      },
    });
    const buss = computed({
      get: () => $store.state.example.buss,
      set: (val) => {
        $store.commit("example/buss", val);
      },
    });
    const bussTrain = computed({
      get: () => $store.state.example.bussTrain,
      set: (val) => {
        $store.commit("example/bussTrain", val);
      },
    });
    const storeCykel = computed({
      get: () => $store.state.example.cykel,
      set: (val) => {
        $store.commit("example/cykel", val);
      },
    });
    const totalAnswers = computed({
      get: () => $store.state.example.totalAnswers,
      set: (val) => {
        $store.commit("example/totalAnswers", val);
      },
    });
    const totalCarbon = computed({
      get: () => $store.state.example.totalCarbon,
      set: (val) => {
        $store.commit("example/totalCarbon", val);
      },
    });
    const totalDistance = computed({
      get: () => $store.state.example.totalDistance,
      set: (val) => {
        $store.commit("example/totalDistance", val);
      },
    });
    return {
      bil,
      buss,
      bussTrain,
      storeCykel,
      totalAnswers,
      totalCarbon,
      totalDistance,
    };
  },
  methods: {
    async getData() {
      var docRef = db.collection("amica").doc("CollectedData");
      await docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.buss = doc.data().buss;
            this.bussTrain = doc.data().bussTrain;
            this.storeCykel = doc.data().cykel;
            this.bil = doc.data().bil;
            this.totalDistance = doc.data().totalDistance;
            this.totalCarbon = doc.data().totalCarbon;
            this.totalAnswers = doc.data().totalAnswers;
            console.log("buss:", this.buss);
            console.log("bussTrain:", this.bussTrain);
            console.log("cykel:", this.storeCykel);
            console.log("bil:", this.bil);
            console.log("distance:", this.totalDistance);
            console.log("totalCarbon:", this.totalCarbon);
            console.log("Answers:", this.totalAnswers);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
