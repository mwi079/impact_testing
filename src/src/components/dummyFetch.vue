<template>
  <div>
    <p>
      {{message}}
    </p>
    <p>
      {{'blah'}}
    </p>
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name:'dummyFetch',
  async mounted(){
    this.message=await this.fuckOff('/bucket/Malcolm')
    
  },
  methods:{
    async fuckOff(details){
      const url = 'https://foaas.com';
      const res = await axios(`${url}${details}`);
      return`${res.data.message} ${res.data.subtitle}`;
    }
  }
  

})



</script>

<style>
</style>