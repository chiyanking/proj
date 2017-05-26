<template>
  <footer v-on:click="homePage">
    尾部元素
  </footer>
</template>
<script>
  import Vue from 'vue';
  import {Menu, Submenu, MenuItem} from 'element-ui';
  Vue.component(Menu.name, Menu);
  Vue.component(Submenu.name, Submenu);
  Vue.component(MenuItem.name, MenuItem);
  export default {
    methods: {
      handleSelect(key, keyPath) {
      },
      homePage(event){
        this.$store.commit("setHeader", {type: "show", mount: "header"});
      }
    }
  }
</script>
<style scoped>
  footer {
    width: 100%;
    vertical-align: middle;
    text-align: center;
    background-color: #c43e3e;
    padding: 20px 0px;
  }
</style>
