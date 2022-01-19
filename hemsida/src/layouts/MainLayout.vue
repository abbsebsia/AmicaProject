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
import db from "src/boot/firebase";
import { computed } from "vue";
import { useStore } from "vuex";
import firebase from "firebase/app";
import auth from "firebase/auth";

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
    const uid = computed({
      get: () => $store.state.example.uid,
      set: (val) => {
        $store.commit("example/uid", val);
      },
    });
    const done = computed({
      get: () => $store.state.example.done,
      set: (val) => {
        $store.commit("example/done", val);
      },
    });
    const allData = computed({
      get: () => $store.state.example.allData,
      set: (val) => {
        $store.commit("example/allData", val);
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
      uid,
      done,
      allData,
    };
  },
  methods: {
    async checkUser() {
      var docRef = db.collection("users").doc(this.uid);
      await docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            // console.log(doc.data());
            if (doc.data().done == true) {
              // console.log("closing apppp");
              this.done = true;
            } else {
              this.getData();
            }
          } else {
            console.log("no such document, creating new");
            db.collection("users")
              .doc(this.uid)
              .set({
                done: false,
              })
              .then(() => {
                console.log("Document successfully written!");
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
            this.getData();
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
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
            this.allData = doc.data().listData;
            // console.log("buss:", this.buss);
            // console.log("bussTrain:", this.bussTrain);
            // console.log("cykel:", this.storeCykel);
            // console.log("bil:", this.bil);
            // console.log("distance:", this.totalDistance);
            // console.log("totalCarbon:", this.totalCarbon);
            // console.log("Answers:", this.totalAnswers);
            // console.log("alldata: ", this.allData);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
        this.checkUser();
      } else {
        console.log("signed out");
      }
    });
  },
  mounted() {},
};
</script>
