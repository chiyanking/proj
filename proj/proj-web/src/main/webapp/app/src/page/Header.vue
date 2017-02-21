<template>
  <header class="header" v-if="header">
    <div class="dropdown cell" @mouseenter="showHeder" @mouseleave="hideHeader">
      <div>{{currentItem}}<i class="el-icon-caret-bottom el-icon--right"></i></div>
      <transition name="fade" >
        <div v-if="dropdownItem" @click="toggleSelection" class="dropdownItem">{{subItem}}</div>
      </transition>
    </div>
    <div class="cell userOption">
      <span>{{userName}}</span>|
      <span @click="logOut">退出</span>
      <!-- <i class="el-icon-upload2"></i> -->
    </div>
  </header>
</template>
<script>
import Vue from 'vue';
import { mapMutations ,mapActions} from 'vuex'
import {Dropdown,DropdownMenu,DropdownItem} from 'element-ui';
Vue.use(Dropdown);
Vue.use(DropdownMenu);Vue.use(DropdownItem);
  export default {
    data:function(){
      return {
        dropdownItem:false,
        currentItem:"代办事项",
        subItem:"我的业务"
      }
    },
    methods: {
      showHeder(key, keyPath) {
        this.dropdownItem=true;
      },
      hideHeader(){
        this.dropdownItem=false;
      },
      homePage(event){
        // this.$store.commit("setHeader",{type:"hide",mount:"header"});
      },
      toggleSelection(){
        let  current=this.currentItem,processed=false;
        this.currentItem=this.subItem;
        this.subItem=current;
        if(this.currentItem == "代办事项"){
          processed=false;
        }else if(this.currentItem == "我的业务"){
          processed=true;
        }
        //分页控件页码改变也会触发更新
        if(this.$store.state.enterprisesTable.params.page!=1){
          this.$store.commit("changeEntTable",{type:"processed",processed:processed});
          this.$store.commit("changeEntTable",{type:"page",page:1});
        }else{
          this.reloadEntTable({type:"processed",processed:processed});
        }
      },
      ...mapActions(["logOut","reloadEntTable"])
    },
    computed: {
      header:function(){
        return this.$store.state.header;
      },
      userName:function(){
        return this.$store.state.user.name;
      }
    }
  }
</script>
<style scoped>
.header{
  color:#fff;
  background: #c43e3e;
}
.header .cell{
  display: inline-block;
  padding:20px 30px 20px 30px;
}
.dropdown{
  transition: .5s;
}
.dropdown:hover{
  transition: .5s;
  cursor: pointer;
  background: #fff;
  color:#c43e3e;
}
.dropdownItem{
  margin-top: 20px;
  padding: 20px 30px 20px 30px;
  background: #fff;
  display: inline-block;
  position: absolute;
  border-top: 1px solid #f5f5f5;
  margin-left: -30px;
  width: 85px;
}
.hidden{
  display: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}



.userOption{
  float: right;
  cursor: pointer;
}
.userOption span{
  padding: 0 10px 0 10px;
}

</style>
<!--全局样式 -->
<style>
  body{
    margin:0;
    padding:0;
    background: #f5f5f5;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .header{
    background-color: #c43e3e;
  }
</style>
