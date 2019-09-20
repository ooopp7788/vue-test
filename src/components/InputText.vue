<template>
  <div>
    <input type="text" :value="text" @input="handleInput" v-on:input="handleInput2"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    value: {}
  },
  data () {
    return {
      text: 'text content'
    }
  },
  created() {
    // this.testList = ['aaa'].concat(this.testList);
  },
  methods: {
    handleInput(event) {
      this.text = event.target.value;
      this.$emit('input', event.target.value)
    },
    handleInput2(event) {
      console.log(event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
