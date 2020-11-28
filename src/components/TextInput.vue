<template>

  <section class="src-components-text-input">
    <h1>src-components-text-input Component</h1>

    <label for="text">Texto</label>
          <input 
            type="text"
            id="text"
            class="form-control"
            v-model="text"
          >
    <div>
      <p> {{ toUpperCase(codify(toLowerCase(text))) }} </p> 
    </div>
  </section>

</template>

<script>
import filter from '../filter.js'
  export default  {
    name: 'src-components-text-input',
    props: [],
    mixins: [
      filter
    ],
    mounted () {

    },
    data () {
      return {
        text: ""
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-text-input {

  }
</style>
