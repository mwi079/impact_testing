<template>
  <div>
    <p>
      {{message}}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'dummyFetch',
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    forTesting() {
      return 7;
    },
  },
});
</script>

<style>
</style>