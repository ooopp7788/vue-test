<template>
  <div id="app">
    <div class="container">
      <p class="left">
        1230929
        <span class="text">元</span>
        <span class="icon">►</span>
      </p>
    </div>
  </div>
</template>

<script>
import * as _ from 'ramda';
import axios from 'axios';

import InputText from './components/InputText.vue';
import SlotTest from './components/SlotTest.vue';
import Mock from './lib/index.js';
import Counter from './wasm/counter.wasm'

export default {
  components: {
    InputText,
    SlotTest
  },
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
  },
  beforeCreate() {
  },
  beforeMount() {
  },
  methods: {
    runWasm() {
      const counter = new Counter({
        'env': {
          '__table_base': 0,
          '__memory_base': 1024,
          'memory': new WebAssembly.Memory({initial: 256}),
          'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
        }
      }).then(({ instance }) => {
        console.log("count function result is : " + instance.exports._count());
      })
    },
    onInput(e) {
      console.log(e.target.value, parseFloat(e.target.value));
    },
    inputHandler1(value) {
      debugger;
      console.log(1);
      this.test = value;
    },
    inputHandler2(value) {
      console.log(2);
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  width: 100%;
}

</style>

<style>
* {
  box-sizing: border-box;
}
  body {
    background: #fff;
  }
  .container {
    width: 100%;
    height: 200px;
    margin: 30px;
    background: #eee;
  }

  .left {
    /* float: left; */
    width: 400px;
    /* border: 1px solid #000; */
    line-height: 40px;
    font-size: 30px;
  }

  .text {
    border: 1px solid hsl(0, 100%, 50%);
    font-size: 66px;
    background: pink;
    vertical-align: bottom;
  }
  .icon {
    /* border: 1px solid #ff0000; */
    font-size: 16px;
    vertical-align: middle;
  }
</style>
