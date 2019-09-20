<template>
  <div>
    <template v-for="item in testList">
      <div>A{{item}}</div>
    </template>
    <div class="logo" v-if="testList.length < 1">
      <img src="../assets/logo.png">
    </div>
    <button @click="reset">reset</button>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      testList: [
        'gogogo'
      ]
    }
  },
  created() {
    // this.testList = ['aaa'].concat(this.testList);
  },
  methods: {
    reset() {
      this.testList = [];
    },
    add() {
      this.testList = ['1a12'].concat(this.testList);
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
