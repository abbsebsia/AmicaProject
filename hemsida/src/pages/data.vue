<template>
  <q-page class="page"> 
    <div>
      <h3>{{stats}}</h3>
    </div>
    
    <div>
      <q-btn class="q-mt-xl" color="primary" text-color="white" elevated to="/" label="Home" no-caps></q-btn>
    </div>
    
    
  </q-page>
</template>

<script>
import db from '../boot/firebase'

export default {
  name: 'data',
  components: {
   
  },
  data(){
    return{
      stats:''
    }
  },
  mounted(){
    var docRef = db.collection("data").doc("Ok3871TmHhrCHgy1Q4jj");

docRef.get().then((doc) => {
    if (doc.exists) {
        this.stats = doc.data().test
        console.log(this.stats)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
  },
 
 
}
</script>
<style scoped>
.page{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>