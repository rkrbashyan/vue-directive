
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
  mounted() {
    console.log("COMP-A: mounted");
  },
  beforeMount() {
    console.log("COMP-A: beforeMount");
  },
  beforeDestroy() {
    console.log("COMP-A: beforeDestroy");
  },
  destroyed() {
    console.log("COMP-A: destroyed");
  }
};
</script>

