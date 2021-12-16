<template>
  <q-page class="flex flex-center">
    <q-btn 
    class="q-mt-xl"
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
  name: 'PageIndex'
})
</script>
