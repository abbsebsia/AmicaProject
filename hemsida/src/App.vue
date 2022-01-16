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
      var docRef = db.collection("data").doc("CollectedData");
      await docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.buss = doc.data().buss;
            this.bussTrain = doc.data().bussTrain;
            this.cyckel = doc.data().cyckel;
            this.bil = doc.data().bil;
            this.totalAnswers = doc.data().totalAnswers;
            this.totalCarbon = doc.data().totalCarbon;
            this.totalDistance = doc.data().totalDistance;
            // console.log("buss:",this.buss)
            // console.log("bussTrain:",this.bussTrain)
            // console.log("cyckel:",this.cyckel)
            // console.log("bil:",this.bil)
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
});
</script>
