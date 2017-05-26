<template>
  <div class="Left">
    左侧菜单
  </div>
</template>
<script>
  import Vue from 'vue';
  import {mapMutations, mapActions} from 'vuex'
  export default {
    data: function () {
      return {
        dropdownItem: false,
        currentItem: "代办事项",
        subItem: "我的业务"
      }
    }
  }
</script>
<style scoped>
  .Left {
    background: #13ce66;
    width: 200px;
    height: 500px;
    float: left;
  }
</style>
