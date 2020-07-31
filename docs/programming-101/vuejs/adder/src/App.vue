<template>
  <div id="app">
    <h3>Addition Calculator</h3>
    <form id="sumForm">
      <!-- We can use variables from our script using v-model -->
      <input type="text" class="form-control" v-model="num1">
      <input type="text" class="form-control" v-model="num2">
      <!-- The @click attribute will bind functions from our script -->
      <button @click="addNumbers" type="button" class="btn btn-light">
        Add the numbers!
      </button>
    </form>
    <!-- The {{ }} allows us to execute javascript inside our HTML-->
    <p><strong>Sum:</strong> {{ sum }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
  name: 'app',
  setup() {
    let num1 = ref(0);
    let num2 = ref(0);
    let sum = ref(0);

    function addNumbers() {
      sum.value = parseInt(num1.value) + parseInt(num2.value);
    }

    return {
      num1,
      num2,
      sum,
      addNumbers,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
