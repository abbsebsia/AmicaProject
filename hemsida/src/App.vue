<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import db from '../src/boot/firebase'

export default defineComponent({
  name: 'App',
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
              // console.log("buss:",this.buss)
              // console.log("bussTrain:",this.bussTrain)
              // console.log("cyckel:",this.cyckel)
              // console.log("bil:",this.bil)
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
    
  }
})
</script>
