<template>
  <q-page class="flex flex-center">
    <div class="pageHolder">
    <div id="Section2" class="Section">
        <h1 id="Tackh1">Tack för att du har röstat!</h1>
        <p id="Tackp">Här är lite interesant fakta om ditt färdmedel</p>
        <div class="TackData">
            <q-btn @click="nextData()" class="TD" id="TD1">
                <p id="TD1T">Data1</p>
            </q-btn>
            <q-btn @click="nextData()" class="TD" id="TD2">
                <p id="TD2T">Data1</p>
            </q-btn>
            </div>
        </div>
        <div id="Section1" class="Section">
            <h1 id="Title1">Hur tog du dig till skolan idag?</h1>
            <div class="choiceGrid">
                <q-btn @click="toS2()" class="choices" id="choice1">
                    <img src="../assets/Buss.svg" class="choiceIMG">
                </q-btn>
                <q-btn @click="toS2()" class="choices" id="choice2">
                    <img src="../assets/TåhBuss.svg" class="choiceIMG">
                </q-btn>
                <q-btn @click="toS2()" class="choices" id="choice3">
                    <img src="../assets/CykelGång.svg" class="choiceIMG">
                </q-btn>
                <q-btn @click="toS2()" class="choices" id="choice4">
                    <img src="../assets/Bil.svg" class="choiceIMG">
                </q-btn>
            </div>
        </div>
    </div>
    <q-btn class="q-mt-xl"
        color="primary"
        text-color="white"
        unelevated
        to="/data"
        label="Data"
        no-caps
    ></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      data: 1,
    }
  },
  methods:{
    sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  },
  toS2(){
      document.querySelector("#Section1").style.opacity = "0";
  },
  toS2(){
    // document.querySelector("#Section1").style.opacity = "0";
    document.querySelector("#Section1").style.position = "absolute";
    document.querySelector("#Section1").style.left = "-1000px";
    sleep(5000).then(() => {
        document.querySelector("#Section1").style.display = "none";
  })
  },
  nextData(){
    console.log(data)
    let s = "#TD" + data.toString()
    document.querySelector(s).style.display = "none";
    this.data++
  },
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

body{
    background-color: none;
    font-family: 'Montserrat', sans-serif;
}
.Section{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    opacity: 1;
    background-color: white;
}
#Title1{
    text-align: center;
    width: 80%; 
    font-size: 200%;
    font-weight: normal;
}
.choiceGrid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 70%;
    width: 80%;
    align-items: center;
    justify-content: center;
    background-color: none;
    }

.choices{
    background-color: #FF0010;
    border-radius: 3vh;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}

.choiceIMG{
    height: 50%;
}

#Section1, #Section2{
    grid-area: 1 / 1;
    /* transition: 0.9s cubic-bezier(.64,.02,.45,.99); */
}
#Section1{
    z-index: 5;
    /* display: none; */
    transition: 0.9s ease-in-out
}

.pageHolder{
    display: grid;
}

#Tackh1{
    position: relative;
    text-align: center;
    width: 80%;
}


#Tackp{
    position: relative;
    text-align: center;
    width: 86%;
    font-size: small;
}
.TackData{
    display: grid;
    background-color: red;
    width: 80%;
    height: 70%;
    align-items: center;
    justify-content: center;
}
h1{
    font-weight: normal;
}
.TD{
    grid-area: 1 / 1;
}
#TD1{
    background-color: green;
    grid-area: 1 / 1;
}
</style>
