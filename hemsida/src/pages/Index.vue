<template>
  <q-page class="flex flex-center" id="page1">
    <div class="pageHolder">
      <div id="Section3" class="Section">
        <h1 id="Tackh1">Tack för att du har svarat!</h1>
        <div v-if="koldioxid" class="CalKolOuter">
          <div class="CalKol">
            <p id="calp">
              På ett år kommer du att släppa ut
              <b>{{ Math.round((koldioxid * 253) / 1000) }}</b> kg koldioxid
            </p>
          </div>
        </div>
        <div v-if="koldioxid" class="CalKolOuter2">
          <div v-if="fordon == 'bil'" class="CalKol2">
            <p id="koldioxidp2">
              Detta är 870% mer koldioxid än om du hade åkt buss
            </p>
          </div>
          <div v-if="fordon == 'buss'" class="CalKol2">
            <p id="koldioxidp2">
              Om du hade åkt bil hade du släppt ut 870% mer koldioxid
            </p>
          </div>
        </div>

        <div v-if="gång" class="CalKolOuter">
          <div class="CalKol">
            <p id="calp">
              Idag bränner du <b>{{ cykel }}</b> kcal
            </p>
          </div>
        </div>
        <div v-if="gång" class="CalKolOuter">
          <div class="CalKol">
            <p id="calp">
              Om du cyklar hela året så kommer du att bränna
              <b>{{ cykel * 253 }}</b> kcal
            </p>
          </div>
        </div>
        <div class="TackData">
          <q-btn to="/data" id="dataBtn"> Insamlad data </q-btn>
        </div>
      </div>

      <div id="Section2" class="Section">
        <h1 id="Slidertext">
          Du har
          <p id="SlidertextB">{{ standard }}</p>
          km till skolan
        </h1>
        <q-slider
          class="slider"
          v-model="standard"
          :min="1"
          :max="70"
          color="red"
        />
        <q-btn @click="nextSection('totalDistance')" id="startBTN">Next</q-btn>
      </div>

      <div id="Section1" class="Section">
        <h1 id="Title1">Hur tog du dig till skolan idag?</h1>
        <div class="choiceGrid">
          <q-btn @click="nextSection('buss')" class="choices" id="choice1">
            <img src="~assets/Buss.svg" class="choiceIMG" />
          </q-btn>
          <q-btn @click="nextSection('bussTrain')" class="choices" id="choice2">
            <img src="~assets/TåhBuss.svg" class="choiceIMG" />
          </q-btn>
          <q-btn @click="nextSection('cykel')" class="choices" id="choice3">
            <img src="~assets/CykelGång.svg" class="choiceIMG" />
          </q-btn>
          <q-btn @click="nextSection('bil')" class="choices" id="choice4">
            <img src="~assets/Bil.svg" class="choiceIMG" />
          </q-btn>
        </div>
      </div>

      <div id="Section0" class="Section">
        <h1 id="AmicaTitle">AMICA</h1>
        <h1 id="Title0">Färdmedelsundersökning</h1>
        <q-btn
          @click="nextSection()"
          id="startBTN"
          :to="this.done ? '/tack' : ''"
          >start</q-btn
        >
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { ref } from "vue";
import db from "src/boot/firebase";
export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      data_test: 1,
      section_test: 0,
      standard: ref(2),
      koldioxid: 0,
      cykel: 0,
      gång: 0,
      fordon: "",
    };
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
    nextSection(val) {
      if (this.done) {
        console.log("redirecting");
        this.$refs("");
      }
      if (
        val == "buss" ||
        val == "cykel" ||
        val == "bussTrain" ||
        val == "bil"
      ) {
        this.fordon = val.toString();
        // console.log(this.fordon);
      }
      let s = "#Section" + this.section_test.toString();
      document.querySelector(s).style.opacity = "0";
      document.querySelector(s).style.pointerEvents = "none";
      this.section_test++;
      // console.log(this.section_test);

      if (this.section_test.toString() == 3) {
        // console.log(this.fordon);
        // console.log("LETS GOO");
        // console.log(val);
        this.totalAnswers += 1;
        switch (this.fordon) {
          case "buss":
            this.buss += 1;
            // console.log(this.standard);
            this.koldioxid += Math.round(this.standard * 14 * 2);
            // console.log(this.koldioxid);
            this.allData.push({
              fordon: 3,
              distance: this.standard,
              carbon: this.koldioxid,
              calories: 0,
            });
            break;
          case "bussTrain":
            this.bussTrain += 1;
            this.koldioxid += Math.round(
              5 * 14 + (this.standard - 5) * 0.0039 * 2
            );
            this.allData.push({
              fordon: 2,
              distance: this.standard,
              carbon: this.koldioxid,
              calories: 0,
            });
            break;
          case "cykel":
            this.storeCykel += 1;
            this.cykel += Math.round(this.standard * 30 * 2);
            this.gång += Math.round(this.standard * 65 * 2);
            this.allData.push({
              fordon: 4,
              distance: this.standard,
              calories: Math.round((this.cykel + this.gång) / 2),
              carbon: 0,
            });
            break;
          case "bil":
            this.koldioxid += Math.round(this.standard * 122);
            this.bil += 1;
            this.allData.push({
              fordon: 1,
              distance: this.standard,
              carbon: this.koldioxid,
              calories: 0,
            });
            break;
        }

        this.totalCarbon += Math.round(this.koldioxid);
        this.totalDistance += this.standard;
        db.collection("amica")
          .doc("CollectedData")
          .set({
            buss: this.buss,
            bussTrain: this.bussTrain,
            cykel: this.storeCykel,
            bil: this.bil,
            totalDistance: this.totalDistance,
            totalCarbon: this.totalCarbon,
            totalAnswers: this.totalAnswers,
            listData: this.allData,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        db.collection("users")
          .doc(this.uid)
          .set({
            done: true,
          })
          .then(() => {
            console.log("User answered");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    },
    nextData() {
      console.log(this.data_test);
      let s = "#TD" + this.data_test.toString();
      document.querySelector(s).style.opacity = "0";
      document.querySelector(s).style.pointerEvents = "none";
      this.data_test++;
      // console.log("Koldioxid", this.koldioxid);
      // console.log("Cal Cykel", this.cykel);
      // console.log("Cal Gång", this.gång);
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.slider {
  appearance: none;
  width: 70%; /* Full-width */
  height: 25px; /* Specified height */
  outline: none; /* Remove outline */
}
body {
  background-color: none;
  font-family: "Montserrat", sans-serif;
}
.Section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  opacity: 1;
  background-color: white;
}
#Title0 {
  position: relative;
  top: -20%;
  font-size: 150%;
}
#AmicaTitle {
  position: relative;
  top: -20%;
  font-size: 400%;
}
#startBTN {
  position: relative;
  margin-top: 20%;
  width: 40%;
  height: 4%;
  background-color: #ff0010;
  color: white;
  border-radius: 3vh;
}
#Title1 {
  text-align: center;
  width: 80%;
  font-size: 200%;
  font-weight: normal;
  position: relative;
  top: -10%;
}
.choiceGrid {
  position: relative;
  top: -10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 60%;
  width: 80%;
  align-items: center;
  justify-content: center;
  background-color: none;
}
.choices {
  background-color: #ff0010;
  border-radius: 3vh;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
.choiceIMG {
  height: 50%;
}
#Section0,
#Section1,
#Section2,
#Section3,
#Section4 {
  grid-area: 1 / 1;
  /* transition: 0.9s cubic-bezier(.64,.02,.45,.99); */
  transition: 0.4s ease-in-out;
}
#Section1 {
  z-index: 1;
  /* display: none; */
  transition: 0.4s ease-in-out;
}
#Section0 {
  z-index: 2;
  /* display: none; */
  transition: 0.4s ease-in-out;
}
#Section2 {
  z-index: 0;
  /* display: none; */
  transition: 0.4s ease-in-out;
}
#Section3 {
  z-index: 0;
  /* display: none; */
  transition: 0.4s ease-in-out;
}
.pageHolder {
  display: grid;
}
#Tackh1 {
  position: relative;
  text-align: center;
  width: 80%;
  font-size: 300%;
}
#Tackp {
  position: relative;
  text-align: center;
  width: 86%;
  font-size: 1.5em;
}
.TackData {
  display: grid;
  background-color: none;
  width: 80%;
  height: 70%;
  align-items: center;
  justify-content: center;
}
h1 {
  font-weight: normal;
  line-height: 150%;
}
.TD {
  grid-area: 1 / 1;
  background-color: #ff0010;
  color: white;
  text-align: center;
}
#TD1 {
  grid-area: 1 / 1;
}
#page1 {
  height: 100%;
  overflow: hidden;
}
#Slidertext {
  font-size: 200%;
  position: relative;
  top: -20%;
  display: inline;
}
#SlidertextB {
  font-size: 100%;
  position: relative;
  font-weight: 700;
  display: inline;
}
.CalKolOuter {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 85%;
  margin-top: 2%;
  background-color: #ff0010;
  border-radius: 20px;
}
.CalKol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: left;
  width: 90%;
  padding-top: 5%;
  color: white;
  font-size: 16px;
}
.CalKolOuter2 {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 85%;
  margin-top: 2%;
  background-color: #ff0010;
  border-radius: 20px;
}
.CalKol2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: left;
  width: 90%;
  padding-top: 5%;
  color: white;
  font-size: 16px;
}
#dataBtn {
  background-color: #ff0010;
  color: white;
  border-radius: 20px;
}
</style>
