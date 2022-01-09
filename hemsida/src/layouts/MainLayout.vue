<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          amica
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import db from '../boot/firebase'

export default {
  name: 'MainLayout',
  components: {
   
  },
  data(){
    return{
     
    }
  },
  methods:{
    async getData(){
      var docRef = db.collection("data").doc("CollectedData");
      await docRef.get().then((doc) => {
          if (doc.exists) {
              this.$store.state.buss = doc.data().buss
              this.$store.state.bussTrain = doc.data().bussTrain
              this.$store.state.cyckel = doc.data().cyckel
              this.$store.state.bil = doc.data().bil
              this.$store.state.totalDistance = doc.data().totalDistance
              // console.log("buss:",this.$store.state.buss)
              // console.log("bussTrain:",this.$store.state.bussTrain)
              // console.log("cyckel:",this.$store.state.cyckel)
              // console.log("bil:",this.$store.state.bil)
              // console.log("distance:",this.$store.state.totalDistance)
          } else {
          console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    }
  },
  computed:{
    bil(){
      return this.$store.state.bil
    }
  },
  mounted(){
    this.getData()
  }


}
</script>