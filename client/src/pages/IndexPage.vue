<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <DummyFetch
      active
      :message="message"
      :backend="backend"
    />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta, Details } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import DummyFetch from 'components/dummyFetch.vue';
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent, DummyFetch },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const details = ref<Details>({
      name: '',
      type: 'bucket',
      url: 'https://foaas.com',
    });
    let message = ref('');
    let backend = ref('');
    return { todos, meta, details, message, backend };
  },
  async mounted() {
    this.backend = await this.fetchFromBackend();
    this.details.name = this.backend;
    this.message = await this.fuckOff(this.details);

    console.log(this.backend);
  },
  methods: {
    async fuckOff(details: Details) {
      const res = await axios(`${details.url}/${details.type}/${details.name}`);
      return `${res.data.message} ${res.data.subtitle}`;
    },
    async fetchFromBackend() {
      const res = await axios('http://localhost:3500/');
      return res.data;
    },
  },
});
</script>
