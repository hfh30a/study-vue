<template>
  <div id="app">
    <InputField />
  </div>
</template>

<script>
import InputField from "./component/InputField";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { InputField }
}
</script>

<style>
</style>
