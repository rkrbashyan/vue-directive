
<template>
  <div>
    Comp - A
    <hr />
    <router-link :to="{ name: 'comp-b' }">Go to Comp-B</router-link>
  </div>
</template>
<script>
/* eslint-disable no-console */
export default {
  beforeCreate() {
    console.log("COMP-A: beforeCreate");
  },
  created() {
    console.log("COMP-A: created");
  },
  beforeMount() {
    console.log("COMP-A: beforeMount");
  },
  mounted() {
    console.log("COMP-A: mounted");
  },
  beforeDestroy() {
    console.log("COMP-A: beforeDestroy");
  },
  destroyed() {
    console.log("COMP-A: destroyed");
  }
};
</script>

