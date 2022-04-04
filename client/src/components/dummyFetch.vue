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

<script lang="ts">
import axios from 'axios';
import { Details } from './models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'dummyFetch',
  setup() {
    const details = ref<Details>({
      name: 'Malcolm',
      type: 'bucket',
      url: 'https://foaas.com',
    });
    let message = '';

    return { details, message };
  },
  async mounted() {
    this.message = await this.fuckOff(this.details);
    console.log(this.message);
  },
  methods: {
    async fuckOff(details: Details) {
      const res = await axios(`${details.url}/${details.type}/${details.name}`);
      return `${res.data.message} ${res.data.subtitle}`;
    },
  },
});
</script>

<style>
</style>