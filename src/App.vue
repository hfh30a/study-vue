<template>
  <div id="app">
    <InputField />
    <SearchField />
  </div>
</template>

<script>
import InputField from "./component/InputField";
import SearchField from "./component/SearchField";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: { InputField, SearchField },
};
</script>

<style>
</style>
