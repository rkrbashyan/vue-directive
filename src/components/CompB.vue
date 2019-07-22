<template>
  <div>
    Comp - B
    <hr />
    <router-link
      v-dummy
      :to="{ name: 'comp-a' }"
      @click.native="onRouterLinkClick"
      >Go to Comp-A</router-link
    >
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  beforeCreate() {
    console.log("COMP-B: beforeCreate");
  },
  created() {
    console.log("COMP-B: created");
  },
  beforeMount() {
    console.log("COMP-B: beforeMount");
  },
  mounted() {
    console.log("COMP-B: mounted");
  },
  beforeDestroy() {
    console.log("COMP-B: beforeDestroy");
  },
  destroyed() {
    console.log("COMP-B: destroyed");
  },
  methods: {
    onRouterLinkClick() {
      console.log("ROUTER_LINK_CLICKED");
    }
  }
};
</script>
